'use client'
import { ACCESS_CODE, BASE_URL, MERCHANT_ID, ONEPAY_HOST, SECRET_KEY_HASH } from '@/config-global'
import { basicBike, bigBike, convertStr2URL, fCurrency, fDate } from '@/lib/utils'
import { yupResolver } from '@hookform/resolvers/yup'
import { Select, Separator, TextArea, TextField } from '@radix-ui/themes'
import CryptoJS from 'crypto-js'
import { pickBy } from 'lodash'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Form, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import Button from '../global/Button'
import RHFDatePicker from '../ui/RHFDatePicker'
import { useMediaQuery } from 'react-responsive'

import { exchangeRate } from '@/utils'
import { FORM_GLOBAL } from '@/graphql/form/queries'
import { useMutation } from '@apollo/client'
import LineLeftPayMent from '../icons/LineLeftPayMent'
import IconMotorMbPayment from '../icons/IconMotorMbPayment'
import LineRightPayMent from '../icons/LineRightPayMent'
import LineTrip from '../icons/LineTrip'

const defaultValues = {
  selfDriving: 0,
  localDriver: 0,
  name: '',
  email: '',
  phone: '',
  message: '',
  phone: '',
  pickup: '',
  departureDate: '',
  pickupAddress: '',
  droff: '',
  endDate: '',
  droffAddress: '',
}
const inputStyle = {
  height: '2.5rem',
  outline: 'none',
  borderRadius: '0.5rem',
  border: 'none',
  backgroundColor: '#F2F2F2',
  padding: '0.75rem 1rem',
  fontSize: '0.875rem',
}
const inputMobileStyle = {
  height: '10.66rem',
  fontSize: '3.46rem',
  backgroundColor: '#F2F2F2',
  height: '10.66rem',
  borderRadius: '2.1rem',
  padding: '4.26rem 3.2rem',
}

export default function BookingOnlineV2({ tour = '', allTourHG }) {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const [ip, setIp] = useState('')
  const [mutate] = useMutation(FORM_GLOBAL)

  const [selfDriving, setSelfDriving] = useState(0)
  const [localDriver, setLocalDriver] = useState(0)
  const [pick, setPick] = useState(
    tour?.tour?.tourHaGiangDetail?.price?.pickUp ||
      [...allTourHG?.nodes]?.reverse()[0]?.tourHaGiangDetail?.price?.pickUp,
  )
  const [droff, setDroff] = useState(
    tour?.tour?.tourHaGiangDetail?.price?.droff || [...allTourHG?.nodes]?.reverse()[0]?.tourHaGiangDetail?.price?.droff,
  )
  const [selfPrice, setSelfPrice] = useState(
    tour?.tour?.tourHaGiangDetail?.price?.selfDriving ||
      [...allTourHG?.nodes]?.reverse()[0]?.tourHaGiangDetail?.price?.selfDriving,
  )
  const [localPrice, setLocalPrice] = useState(
    tour?.tour?.tourHaGiangDetail?.price?.localDriver ||
      [...allTourHG?.nodes]?.reverse()[0]?.tourHaGiangDetail?.price?.localDriver,
  )
  const router = useRouter()

  useEffect(() => {
    if (!tour) return
    setSelfDriving(tour?.countSelf)
    setLocalDriver(tour?.countDriver)
  }, [])

  const BookingSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().required().email(),
    phone: Yup.string().required(),
    message: Yup.string().required(),
    phone: Yup.string().required(),
    pickup: Yup.string(),
    departureDate: Yup.string(),
    pickupAddress: Yup.string().required(),
    droff: Yup.string(),
    typeTour: Yup.string(),
    endDate: Yup.string(),
    droffAddress: Yup.string().required(),
  })

  const methods = useForm({
    resolver: yupResolver(BookingSchema),
    defaultValues,
  })

  const {
    register,
    watch,
    setValue,
    setError,
    formState: { errors },
    handleSubmit,
  } = methods

  const values = watch()

  useEffect(() => {
    if (!values.departureDate || !values.typeTour) return
    const originalDate = new Date(values.departureDate)
    const day = allTourHG?.nodes?.find((e) => e?.title === values.typeTour)?.tourHaGiangDetail?.price?.longTimeTourDay
    const updatedDate = new Date(originalDate.getTime() + day * 24 * 60 * 60 * 1000)
    setValue('endDate', updatedDate)
  }, [values.typeTour])

  const selfCost = selfDriving * selfPrice * exchangeRate
  const localCose = localDriver * localPrice * exchangeRate
  const totalPrice = selfCost + localCose
  const servicePrice = totalPrice * 0.03
  const totalAmount = totalPrice + servicePrice

  const getIp = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json')
      const data = await response.json()
      if (data) {
        setIp(data.ip)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getIp()
  }, [])

  const generateParams = (data, pickVpc = false) => {
    const reqParam = {
      AgainLink: BASE_URL,
      Title: 'Ha Giang Tour Payment',
      vpc_AccessCode: ACCESS_CODE,
      vpc_Amount: totalAmount + '00',
      vpc_CardList: 'INTERNATIONAL',
      vpc_Command: 'pay',
      vpc_Currency: 'VND',
      vpc_Locale: 'en',
      vpc_MerchTxnRef: Math.floor(Date.now() / 1000) + '_hgtour',
      vpc_Merchant: MERCHANT_ID,
      vpc_OrderInfo: data?.name,
      vpc_ReturnURL: BASE_URL + '/payment-successful',
      vpc_TicketNo: ip,
      vpc_Version: '2',
    }
    if (pickVpc) {
      const pickParams = pickBy(reqParam, (_, key) => key.startsWith('vpc_') || key.startsWith('user_'))
      return convertStr2URL(pickParams)
    }
    return convertStr2URL(reqParam)
  }

  const onSubmit = async (e) => {
    if (typeof window === 'undefined') return
    if (totalAmount <= 0 || !Number(totalAmount)) {
      setError('root', {
        message: 'Please select the number of participants!',
      })
      return
    }
    const formData = {
      nameTour: values.typeTour || tour?.tour?.title || [...allTourHG?.nodes]?.reverse()[0]?.title,
      name: e?.name + ' - ' + (selfDriving + localDriver) + ' pax',
      email: e?.email,
      contactInfo: e?.email + ' - ' + e?.phone,
      pickUp: fDate(e.departureDate) + ' from ' + e.pickup + ' at ' + e.pickupAddress,
      tourDuration:
        allTourHG?.nodes?.find(
          (e) => e?.title === (values.typeTour || tour?.tour?.title || [...allTourHG?.nodes]?.reverse()[0]?.title),
        )?.tourHaGiangDetail?.price?.longTimeTourDay + ' Days',
      droffOf: fDate(e.endDate) + ' to ' + e.droff + ' at ' + e.droffAddress,
      selfDriving: selfDriving + ' x $' + selfPrice + ' (' + fCurrency(selfCost) + ' VND)',
      localDriver: localDriver + ' x $' + localPrice + ' (' + fCurrency(localCose) + ' VND)',
      message: e?.message,
      provisional: fCurrency(totalPrice) + ' VND',
      serviceCharge: fCurrency(totalPrice * 0.03) + ' VND',
      total: fCurrency(totalPrice + servicePrice) + ' VND',
    }
    if (formData) {
      mutate({
        variables: {
          input: {
            id: 4,
            fieldValues: [
              {
                id: 1,
                value: formData?.nameTour,
              },
              {
                id: 3,
                value: formData?.name,
              },
              {
                id: 4,
                value: formData?.contactInfo,
              },
              {
                id: 5,
                value: formData?.pickUp,
              },
              {
                id: 6,
                value: formData?.tourDuration,
              },
              {
                id: 7,
                value: formData?.droffOf,
              },
              {
                id: 8,
                value: formData?.selfDriving,
              },
              {
                id: 9,
                value: formData?.localDriver,
              },
              {
                id: 10,
                value: formData?.message,
              },
              {
                id: 11,
                value: formData?.provisional,
              },
              {
                id: 12,
                value: formData?.serviceCharge,
              },
              {
                id: 13,
                value: formData?.total,
              },
              {
                id: 14,
                emailValues: {
                  value: formData?.email,
                },
              },
            ],
          },
        },
      })
    }
    setTimeout(() => {
      window?.localStorage?.setItem('formDataPayment', JSON.stringify(formData))
      const params = generateParams(e, true)
      const secretWordArray = CryptoJS.enc.Hex.parse(SECRET_KEY_HASH)
      const hash = CryptoJS.HmacSHA256(params, secretWordArray)
      const vpc_SecureHash = hash.toString(CryptoJS.enc.Hex).toUpperCase()
      router.push(`${ONEPAY_HOST}?${generateParams(e)}&vpc_SecureHash=${vpc_SecureHash}`)
    }, 500)
  }

  return (
    <section
      className={`font-poppins flex flex-col justify-start`}
      id='bookingId'
    >
      <div className={`mb-[1rem] w-fit`}>
        <div className={` uppercase text-primary-70 relative z-[5] font-heavitas w-fit`}>
          <h2
            className={` text-[2rem] max-lg:text-[3rem] font-extrabold leading-[1] max-md:text-[6.4rem] max-md:leading-[1.17] w-fit`}
          >
            BOOK TOUR
          </h2>
        </div>
      </div>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        {...methods}
        className='max-md:w-[85rem]'
      >
        <div className='flex gap-x-[1.5rem] max-lg:flex-col max-md:gap-y-[8rem]'>
          <div className='w-fit max-lg:w-full'>
            <div className='flex lg:gap-x-[0.75rem] md:gap-x-[1.75rem] max-md:flex-col'>
              <div className='w-[21rem] max-lg:flex-1 max-md:w-full'>
                <div className='mb-[1.88rem] max-md:mb-[4.27rem]'>
                  <div className='truncate font-bold mb-[0.5rem] text-[0.875rem] max-lg:text-[1.875rem] max-md:text-[3.46rem] text-gray-scale-80'>
                    Tour
                  </div>
                  <Select.Root
                    defaultValue={tour?.tour?.title || [...allTourHG?.nodes]?.reverse()[0]?.title}
                    onValueChange={(value) => {
                      setValue('typeTour', value)
                      setSelfPrice(
                        allTourHG?.nodes?.find((e) => e?.title === value)?.tourHaGiangDetail?.price?.selfDriving,
                      )
                      setLocalPrice(
                        allTourHG?.nodes?.find((e) => e?.title === value)?.tourHaGiangDetail?.price?.localDriver,
                      )
                      setPick(allTourHG?.nodes?.find((e) => e?.title === value)?.tourHaGiangDetail?.price?.pickUp)
                      setDroff(allTourHG?.nodes?.find((e) => e?.title === value)?.tourHaGiangDetail?.price?.droff)
                    }}
                  >
                    <Select.Trigger
                      className='w-full !p-[1rem] max-md:!px-[3.2rem] !h-[3.375rem] max-lg:!h-fit max-md:!h-[11.375rem] text-[0.875rem] max-lg:!text-[1.875rem] max-md:!text-[3.47rem] font-bold leading-[1.57] text-gray-scale-80'
                      style={isMobile ? inputMobileStyle : inputStyle}
                      variant='soft'
                      placeholder='Select tour…'
                    />
                    <Select.Content className='z-[99999]'>
                      {[...allTourHG?.nodes]?.reverse()?.map((e, index) => (
                        <Select.Item
                          key={index}
                          className='text-[0.875rem] font-bold leading-[1.57] cursor-pointer text-gray-scale-80 max-lg:!text-[1.875rem] max-md:!text-[3.47rem] max-md:!h-[10rem]'
                          value={e?.title}
                        >
                          {e?.title}
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Root>
                </div>
                <div className='text-[0.875rem] font-bold leading-[150%] mb-[0.5rem] max-md:text-[3.46rem] max-lg:text-[1.875rem] text-gray-scale-80'>
                  {
                    allTourHG?.nodes?.find(
                      (e) =>
                        e?.title ===
                        (values.typeTour || tour?.tour?.title || [...allTourHG?.nodes]?.reverse()[0]?.title),
                    )?.tourHaGiangDetail?.price?.longTimeTourDay
                  }{' '}
                  Days Motorbike Tour:
                </div>
                <div className='rounded-[0.5rem] bg-[#F2F2F2] p-[1rem] max-md:flex max-md:rounded-[2.13rem] max-md:flex-col max-md:gap-[3.2rem] max-md:p-[3.26rem]'>
                  <div className='flex items-center justify-between'>
                    <span className='text-[0.75rem] max-lg:text-[1.75rem] font-medium leading-[1.33] text-gray-scale-80 max-md:text-[3.467rem] max-md:leading-[1.38]'>
                      {basicBike}
                    </span>
                    <div className='flex items-center'>
                      <span
                        className='text-[0.875rem] max-lg:text-[1.875rem] text-gray-scale-80 font-semibold lading-[1.57] max-md:text-[3.733rem] max-md:mr-[3.2rem] 
                      max-lg:mr-[1.75rem] max-md:tracking-[0.00933rem] tracking-[0.00219rem] block mr-[0.75rem]'
                      >
                        ${selfPrice}
                      </span>
                      <div
                        onClick={() => {
                          if (selfDriving === 0) return
                          setSelfDriving(selfDriving - 1)
                        }}
                        className='w-[2.25rem] h-[2.25rem] max-lg:w-[5.25rem] max-lg:h-[5.25rem] max-lg:text-[3.5rem] max-md:w-[9.6rem] cursor-pointer max-md:h-[9.6rem] max-md:text-[6.5rem] text-[1.5rem] active:scale-90 select-none shadow-btn rounded-full flex justify-center items-center'
                      >
                        -
                      </div>
                      <span className='flex items-center mx-[0.5rem] max-lg:mx-[1.5rem] text-[0.875rem] max-lg:text-[1.875rem] font-bold leading-[1.57] max-md:mx-[2.13rem] max-md:text-[3.733rem] max-md:tracking-[0.00933rem] tracking-[0.00219rem]'>
                        {selfDriving === 0 ? '00' : selfDriving > 9 ? selfDriving : '0' + selfDriving}
                      </span>
                      <div
                        onClick={() => {
                          setSelfDriving(selfDriving + 1)
                        }}
                        className='w-[2.25rem] h-[2.25rem] max-lg:w-[5.25rem] max-lg:h-[5.25rem] max-lg:text-[3.5rem] max-md:w-[9.6rem] cursor-pointer max-md:h-[9.6rem] max-md:text-[6.5rem] text-[1.5rem] active:scale-90 select-none shadow-btn rounded-full flex justify-center items-center'
                      >
                        +
                      </div>
                    </div>
                  </div>
                  <div className='flex justify-between my-[0.75rem] h-[2.5rem] max-lg:h-fit max-lg:mt-[1.5rem] max-lg:mb-[2.75rem] items-center max-md:my-0 max-md:h-[10.66rem]'>
                    <span className='text-[0.75rem] max-lg:text-[1.75rem] font-medium leading-[1.33] text-gray-scale-80 whitespace-nowrap max-md:text-[3.467rem] max-md:leading-[1.38]'>
                      {bigBike}
                    </span>
                    <div className='flex items-center'>
                      <span
                        className='text-[0.875rem] max-lg:text-[1.875rem] text-gray-scale-80 font-semibold lading-[1.57] max-md:text-[3.733rem] max-md:mr-[3.2rem] 
                      max-lg:mr-[1.75rem] max-md:tracking-[0.00933rem] tracking-[0.00219rem] block mr-[0.75rem]'
                      >
                        ${localPrice}
                      </span>
                      <div
                        onClick={() => {
                          if (localDriver === 0) return
                          setLocalDriver(localDriver - 1)
                        }}
                        className='w-[2.25rem] h-[2.25rem] select-none max-lg:w-[5.25rem] max-lg:h-[5.25rem] max-lg:text-[3.5rem] max-md:w-[9.6rem] cursor-pointer max-md:h-[9.6rem] max-md:text-[6.5rem] text-[1.5rem] active:scale-90 shadow-btn rounded-full flex justify-center items-center'
                      >
                        -
                      </div>
                      <span className='flex items-center mx-[0.5rem] max-lg:mx-[1.5rem] text-[0.875rem] max-lg:text-[1.875rem] font-bold leading-[1.57] max-md:mx-[2.13rem] max-md:text-[3.733rem] max-md:tracking-[0.00933rem] tracking-[0.00219rem]'>
                        {localDriver === 0 ? '00' : localDriver > 9 ? localDriver : '0' + localDriver}
                      </span>
                      <div
                        onClick={() => {
                          setLocalDriver(localDriver + 1)
                        }}
                        className='w-[2.25rem] h-[2.25rem] select-none max-lg:w-[5.25rem] max-lg:h-[5.25rem] max-lg:text-[3.5rem] max-md:w-[9.6rem] cursor-pointer max-md:h-[9.6rem] max-md:text-[6.5rem] text-[1.5rem] active:scale-90 shadow-btn rounded-full flex justify-center items-center'
                      >
                        +
                      </div>
                    </div>
                  </div>
                  <Separator
                    my={isMobile ? '0' : '3'}
                    size='4'
                    className='bg-[#d9d9d9] opacity-60 '
                  />
                  <div className='flex justify-between items-center h-[2.5rem] max-lg:h-[4.5rem] max-md:h-[10.66rem] mt-[0.75rem]'>
                    <div className='text-[#B34B1E] text-[1rem] max-lg:text-[2rem] font-semibold max-md:text-[4.26rem]'>
                      Total:{' '}
                    </div>
                    <div className='text-[#B34B1E] font-bold text-center flex leading-[2.5rem] justify-center items-center rounded-[0.5rem] text-[1.25rem] max-lg:text-[2.25rem] w-[12.1875rem] h-[2.5rem] max-lg:h-[4.5rem] bg-white max-md:text-[5.33rem] max-md:rounded-[2.13rem] max-md:max-md:w-[30.13rem] max-md:h-[10.66rem] max-md:items-center'>
                      ${selfDriving * selfPrice + localDriver * localPrice || 0}
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-[21rem] max-lg:flex-1 max-md:w-full max-md:mt-[4.27rem]'>
                <div className='truncate font-semibold mb-[0.5rem] text-[0.875rem] max-lg:text-[1.875rem] max-md:text-[3.46rem]'>
                  Customer information:
                </div>
                <div className='flex flex-col lg:gap-[0.75rem] md:gap-[1.5rem] max-md:gap-[3.2rem]'>
                  <div className=''>
                    <TextField.Input
                      style={isMobile ? inputMobileStyle : inputStyle}
                      className=' rounded-[0.5rem] px-[1rem] py-[0.75rem] md:!text-[1.875rem] lg:!text-[0.875rem] !h-fit'
                      {...register('name')}
                      variant='soft'
                      placeholder='Name *'
                    />
                  </div>
                  <TextField.Input
                    {...register('email')}
                    style={isMobile ? inputMobileStyle : inputStyle}
                    className='rounded-[0.5rem] px-[1rem] py-[0.75rem] md:!text-[1.875rem] lg:!text-[0.875rem] !h-fit'
                    variant='soft'
                    placeholder='Email *'
                  />
                  <TextField.Input
                    {...register('phone')}
                    style={isMobile ? inputMobileStyle : inputStyle}
                    className='rounded-[0.5rem] px-[1rem] py-[0.75rem] md:!text-[1.875rem] lg:!text-[0.875rem] !h-fit'
                    variant='soft'
                    placeholder='Phone (Whatsapp) *'
                  />
                  <div className=''>
                    <TextArea
                      {...register('message')}
                      style={
                        isMobile ? { ...inputMobileStyle, height: '24.5625rem' } : { ...inputStyle, height: '8.9rem' }
                      }
                      className='rounded-[0.5rem] px-[1rem] py-[0.75rem] md:!text-[1.875rem] lg:!text-[0.875rem] !h-[8rem] max-md:!h-[24.56rem]'
                      variant='soft'
                      placeholder='Message *'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='relative grid grid-cols-4 gap-[0.75rem] max-lg:gap-[1.75rem] w-[42.75rem] max-md:w-full max-lg:w-full max-md:gap-[3.2rem] mt-[1rem] max-lg:mt-[2rem] max-md:mt-[4.2rem]'>
              {/* <IconEnjoin className='absolute top-[4.5rem] max-lg:top-[9.5rem] left-0 max-md:hidden w-full z-[-1]' /> */}
              <LineTrip
                className='absolute top-[3rem] max-lg:top-[6rem] -left-[1rem] max-lg:w-[105%] max-md:hidden w-[105%] z-[-1]'
                dayAmount={
                  allTourHG?.nodes?.find(
                    (e) =>
                      e?.title === (values.typeTour || tour?.tour?.title || [...allTourHG?.nodes]?.reverse()[0]?.title),
                  )?.tourHaGiangDetail?.price?.longTimeTourDay
                }
              />
              <div className='max-md:col-span-2'>
                <div className='truncate font-semibold mb-[0.5rem] text-[0.875rem] max-lg:text-[1.875rem] max-md:text-[3.46rem]'>
                  Pick up
                </div>
                <Select.Root onValueChange={(value) => setValue('pickup', value)}>
                  <Select.Trigger
                    className='w-full md:!text-[1.875rem] lg:!text-[0.875rem] !h-fit'
                    style={isMobile ? inputMobileStyle : inputStyle}
                    variant='soft'
                    placeholder='Pick up…'
                  />
                  <Select.Content className='z-[99999]'>
                    {pick?.map((e, index) => (
                      <Select.Item
                        key={index}
                        value={e?.province}
                        className='cursor-pointer hover:bg-gray-scale-5 md:!text-[1.875rem] lg:!text-[0.875rem] !h-fit max-md:!h-[10rem]'
                      >
                        {e?.province}
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Root>
              </div>
              <div className='max-md:col-span-2 '>
                <div className='truncate font-semibold text-[0.875rem] max-lg:text-[1.875rem] mb-[0.5rem] max-md:text-[3.46rem] '>
                  Departure date
                </div>
                <RHFDatePicker
                  selected={values.departureDate}
                  style={isMobile ? inputMobileStyle : inputStyle}
                  minDate={new Date()}
                  onChange={(date) => {
                    const originalDate = new Date(date)
                    const day = allTourHG?.nodes?.find(
                      (e) =>
                        e?.title ===
                        (values.typeTour || tour?.tour?.title || [...allTourHG?.nodes]?.reverse()[0]?.title),
                    )?.tourHaGiangDetail?.price?.longTimeTourDay

                    const updatedDate = new Date(originalDate.getTime() + day * 24 * 60 * 60 * 1000)

                    setValue('departureDate', date)
                    setValue('endDate', updatedDate)
                  }}
                />
              </div>
              <div className='col-span-2 max-md:col-span-4'>
                <div className='mb-[0.5rem] font-semibold text-[0.875rem] max-lg:text-[1.875rem] max-md:text-[3.46rem]'>
                  Address *
                </div>
                <Select.Root onValueChange={(value) => setValue('pickupAddress', value)}>
                  <Select.Trigger
                    className='w-full md:!text-[1.875rem] lg:!text-[0.875rem] !h-fit'
                    style={isMobile ? inputMobileStyle : inputStyle}
                    variant='soft'
                    placeholder='Address *'
                  />
                  <Select.Content className='z-[99999]'>
                    {values?.pickup &&
                      pick
                        ?.find((e) => e?.province === values?.pickup)
                        ?.listAddress?.map((e, index) => (
                          <Select.Item
                            key={index}
                            value={e?.address}
                            className='cursor-pointer hover:bg-gray-scale-5 md:!text-[1.875rem] lg:!text-[0.875rem] !h-fit max-md:!h-[10rem]'
                          >
                            {e?.address}
                          </Select.Item>
                        ))}
                  </Select.Content>
                </Select.Root>
              </div>
            </div>
            {/* <Image
              src={motoImg}
              alt='moto'
              className='my-[6.4rem] max-md:block hidden w-full'
            /> */}
            <div className='flex items-center max-md:my-[6.4vw] md:hidden'>
              <LineLeftPayMent />
              <IconMotorMbPayment className={'w-[9.57rem] h-[6.4rem] flex-shrink-0'} />
              <span className='font-poppins text-primary-70 text-[3.733rem] font-semibold leading-[1.57] ml-[3.2rem] whitespace-nowrap'>
                Enjoy{' '}
                {
                  allTourHG?.nodes?.find(
                    (e) =>
                      e?.title === (values.typeTour || tour?.tour?.title || [...allTourHG?.nodes]?.reverse()[0]?.title),
                  )?.tourHaGiangDetail?.price?.longTimeTourDay
                }{' '}
                Days in Ha Giang Loop
              </span>
              <LineRightPayMent />
            </div>
            <div className='grid grid-cols-4 gap-[0.75rem] max-lg:gap-[1.75rem] mt-[3.5rem] max-md:gap-[3.2rem] max-lg:mt-[9.5rem] max-md:mt-[4.2rem] w-[42.75rem] max-lg:w-full'>
              <div className='max-md:max-md:col-span-2'>
                <div className='font-semibold mb-[0.5rem] text-[0.875rem] max-md:text-[3.46rem] max-lg:text-[1.875rem]'>
                  Drop
                </div>
                <Select.Root
                  className='w-full '
                  onValueChange={(value) => setValue('droff', value)}
                >
                  <Select.Trigger
                    className='w-full md:!text-[1.875rem] lg:!text-[0.875rem] !h-fit'
                    style={isMobile ? inputMobileStyle : inputStyle}
                    variant='soft'
                    placeholder='Drop…'
                  />
                  <Select.Content className='z-[99999] '>
                    {droff?.map((e, index) => (
                      <Select.Item
                        key={index}
                        value={e?.province}
                        className='cursor-pointer hover:bg-gray-scale-5 md:!text-[1.875rem] lg:!text-[0.875rem] !h-fit max-md:!h-[10rem]'
                      >
                        {e?.province}
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Root>
              </div>
              <div className='pointer-events-none max-md:max-md:col-span-2'>
                <div className='mb-[0.5rem] font-semibold text-[0.875rem] max-md:text-[3.46rem] max-lg:text-[1.875rem]'>
                  End date
                </div>
                <RHFDatePicker
                  style={isMobile ? inputMobileStyle : inputStyle}
                  minDate={values.departureDate}
                  selected={values.endDate}
                  onChange={(date) => {
                    const originalDate = new Date(date)
                    const day = allTourHG?.nodes?.find(
                      (e) =>
                        e?.title ===
                        (values.typeTour || tour?.tour?.title || [...allTourHG?.nodes]?.reverse()[0]?.title),
                    )?.tourHaGiangDetail?.price?.longTimeTourDay

                    const updatedDate = new Date(originalDate.getTime() - day * 24 * 60 * 60 * 1000)

                    setValue('departureDate', updatedDate)
                    setValue('endDate', date)
                  }}
                />
              </div>
              <div className='col-span-2 max-md:col-span-4'>
                <div className='mb-[0.5rem] font-semibold text-[0.875rem] max-md:text-[3.46rem] max-lg:text-[1.875rem]'>
                  Address *
                </div>
                <Select.Root onValueChange={(value) => setValue('droffAddress', value)}>
                  <Select.Trigger
                    className='w-full md:!text-[1.875rem] lg:!text-[0.875rem] !h-fit'
                    style={isMobile ? inputMobileStyle : inputStyle}
                    variant='soft'
                    placeholder='Address *'
                  />
                  <Select.Content className='z-[99999]'>
                    {values?.droff &&
                      droff
                        ?.find((e) => e?.province === values?.droff)
                        ?.listAddress?.map((e, index) => (
                          <Select.Item
                            key={index}
                            value={e?.address}
                            className='cursor-pointer hover:bg-gray-scale-5 md:!text-[1.875rem] lg:!text-[0.875rem] !h-fit max-md:!h-[10rem]'
                          >
                            {e?.address}
                          </Select.Item>
                        ))}
                  </Select.Content>
                </Select.Root>
              </div>
            </div>
          </div>
          <div className='flex-1 max-lg:mt-[3rem] max-md:mt-0'>
            <div className='mt-[1.87rem] md:mt-0 max-md:mt-[8rem]'>
              <div className='text-[1.25rem] max-lg:text-[2.25rem] font-semibold text-[#2E2E2E] max-md:mb-[2.1rem] max-md:text-[4.26rem]'>
                CONFIRMED TOUR BOOKING:
              </div>
              <div className='rounded-[0.5rem] text-[#2E2E2E] border-[#287c0023] border-[0.5px] bg-[#F8FDFF] max-md:rounded-[2.13rem]'>
                <div className='flex h-[2.5rem] max-lg:h-[4.5rem] border-b border-[#EEE] items-center text-[0.8125rem] max-lg:text-[1.8125rem] max-md:h-[12.06rem]'>
                  <div
                    className='w-[12.1875rem] max-lg:w-[18.1825rem] border-r-[#EEE] border-r-[0.5px] flex-none font-medium text-[0.8125rem] max-lg:text-[1.8125rem] py-[0.5rem] px-[1rem]
                                max-md:w-[29.3rem] max-md:flex max-md:items-center max-md:ml-[4.26rem] max-md:text-[3.46rem] max-md:h-[12.06rem]'
                  >
                    Type of tour
                  </div>
                  <div className='py-[0.5rem] px-[1rem] max-md:ml-[4.26rem] max-md:text-[3.46rem]'>
                    {values.typeTour || tour?.tour?.title || [...allTourHG?.nodes]?.reverse()[0]?.title || '...'}
                  </div>
                </div>
                <div className='flex border-b h-[2.5rem] max-lg:h-[4.5rem] border-[#EEE] items-center text-[0.8125rem] max-lg:text-[1.8125rem] max-md:h-[12.06rem]'>
                  <div className='w-[12.1875rem] max-lg:w-[18.1825rem] border-r-[#EEE] border-r-[0.5px] flex-none  font-medium  py-[0.5rem] px-[1rem] max-md:w-[29.3rem] max-md:flex max-md:items-center max-md:ml-[4.26rem] max-md:text-[3.46rem] max-md:h-[12.06rem]'>
                    Name
                  </div>
                  <div className='py-[0.5rem] px-[1rem] max-md:ml-[4.26rem] max-md:text-[3.46rem]'>
                    {values.name ? values.name + ' - ' + (selfDriving + localDriver) + ' pax' : '...'}
                  </div>
                </div>
                <div className='flex border-b h-[2.5rem] max-lg:h-[4.5rem] border-[#EEE] items-center text-[0.8125rem] max-lg:text-[1.8125rem] max-md:h-[13.866rem]'>
                  <div
                    className='w-[12.1875rem] max-lg:w-[18.1825rem] border-r-[#EEE] border-r-[0.5px] flex-none  font-medium  py-[0.5rem] px-[1rem]
                                max-md:w-[29.3rem] max-md:flex max-md:items-center max-md:ml-[4.26rem] max-md:text-[3.46rem] max-md:h-[13.866rem]'
                  >
                    Contact Info
                  </div>
                  <div className='py-[0.5rem] px-[1rem] max-md:ml-[4.26rem] max-md:text-[3.46rem]'>
                    {values.email || '...'} - {values.phone || '...'}
                  </div>
                </div>
                <div className='flex border-b h-[3.5rem] border-[#EEE] items-center text-[0.8125rem] max-lg:text-[1.8125rem] max-md:h-[23.46rem]'>
                  <div className='w-[12.1875rem] max-lg:w-[18.1825rem] border-r-[#EEE] border-r-[0.5px] flex-none font-medium  py-[0.5rem] px-[1rem] max-md:w-[29.3rem] max-md:flex max-md:items-center max-md:ml-[4.26rem] max-md:text-[3.46rem] max-md:h-[23.46rem]'>
                    Pick up
                  </div>
                  <div className='py-[0.5rem] px-[1rem] max-md:ml-[4.26rem] max-md:text-[3.46rem]'>
                    {values.departureDate && fDate(values.departureDate)} from {values.pickup} at {values.pickupAddress}
                  </div>
                </div>
                <div className='flex border-b h-[2.5rem] max-lg:h-[4.5rem] border-[#EEE] items-center text-[0.8125rem] max-lg:text-[1.8125rem] max-md:h-[12.06rem]'>
                  <div className='w-[12.1875rem] max-lg:w-[18.1825rem] border-r-[#EEE] border-r-[0.5px] flex-none  font-medium  py-[0.5rem] px-[1rem] max-md:w-[29.3rem] max-md:ml-[4.26rem] max-md:border-r-[0.5rem] max-md:flex max-md:items-center max-md:h-[12.06rem] max-md:text-[3.46rem]'>
                    Tour duration
                  </div>
                  <div className='py-[0.5rem] px-[1rem] max-md:ml-[4.26rem] max-md:text-[3.46rem]'>
                    {
                      allTourHG?.nodes?.find(
                        (e) =>
                          e?.title ===
                          (values.typeTour || tour?.tour?.title || [...allTourHG?.nodes]?.reverse()[0]?.title),
                      )?.tourHaGiangDetail?.price?.longTimeTourDay
                    }{' '}
                    Days
                  </div>
                </div>
                <div className='flex border-b h-[3.5rem] border-[#EEE] items-center text-[0.8125rem] max-lg:text-[1.8125rem] max-md:h-[23.46rem]'>
                  <div className='w-[12.1875rem] max-lg:w-[18.1825rem] border-r-[#EEE] border-r-[0.5px] flex-none  font-medium  py-[0.5rem] px-[1rem] max-md:w-[29.3rem] max-md:flex max-md:items-center max-md:ml-[4.26rem] max-md:text-[3.46rem] max-md:h-[23.46rem]'>
                    Drop off
                  </div>
                  <div className='py-[0.5rem] px-[1rem] max-md:ml-[4.26rem] max-md:text-[3.46rem]'>
                    {values.endDate && fDate(values.endDate)} to {values.droff} at {values.droffAddress}
                  </div>
                </div>
                <div className='flex border-b h-[2.5rem] max-lg:h-[4.5rem] border-[#EEE] items-center text-[0.8125rem] max-lg:text-[1.8125rem] max-md:h-[12.06rem]'>
                  <div className='w-[12.1875rem] max-lg:w-[18.1825rem] border-r-[#EEE] border-r-[0.5px] flex-none  font-medium  py-[0.5rem] px-[1rem] max-md:w-[29.3rem] max-md:flex max-md:items-center max-md:ml-[4.26rem] max-md:text-[3.46rem] max-md:h-[12.06rem]'>
                    {basicBike}
                  </div>
                  <div className='py-[0.5rem] px-[1rem] max-md:ml-[4.26rem] max-md:text-[3.46rem]'>
                    {selfDriving && `${selfDriving} x $${selfPrice} (${fCurrency(selfCost) || 0} VND)`}
                  </div>
                </div>
                <div className='flex border-b h-[2.5rem] max-lg:h-[4.5rem] border-[#EEE] items-center text-[0.8125rem] max-lg:text-[1.8125rem] max-md:h-[12.06rem]'>
                  <div className='w-[12.1875rem] max-lg:w-[18.1825rem] border-r-[#EEE] border-r-[0.5px] flex-none  font-medium  py-[0.5rem] px-[1rem] max-md:w-[29.3rem] max-md:flex max-md:items-center max-md:ml-[4.26rem] max-md:text-[3.46rem] max-md:h-[12.06rem]'>
                    {bigBike}
                  </div>
                  <div className='py-[0.5rem] px-[1rem] max-md:ml-[4.26rem] max-md:text-[3.46rem]'>
                    {localDriver && `${localDriver} x $${localPrice} (${fCurrency(localCose) || 0} VND)`}
                  </div>
                </div>
                <div className='flex border-b h-[2.5rem] max-lg:h-[4.5rem] border-[#EEE] items-center text-[0.8125rem] max-lg:text-[1.8125rem] max-md:h-[13.86rem]'>
                  <div className='w-[12.1875rem] max-lg:w-[18.1825rem] border-r-[#EEE] border-r-[0.5px] flex-none  font-medium  py-[0.5rem] px-[1rem] max-md:w-[29.3rem] max-md:flex max-md:items-center max-md:ml-[4.26rem] max-md:text-[3.46rem] max-md:h-[13.86rem]'>
                    {' '}
                    Message
                  </div>
                  <div className='py-[0.5rem] px-[1rem] max-md:ml-[4.26rem] max-md:text-[3.46rem]'>
                    {values.message}
                  </div>
                </div>
              </div>

              <div className='px-[1rem] py-[0.75rem] max-lg:px-[2rem] max-lg:py-[1.75rem] bg-[#0F515D] rounded-[0.5rem] mt-[1rem] max-lg:mt-[2rem] max-md:rounded-[2.13rem] max-md:p-[3.2rem] max-md:mt-[3.2rem]'>
                <div className='flex justify-between mb-[0.5rem] max-md:mb-[2.1rem] h-[1.5rem] max-lg:h-[3.5rem] max-md:h-auto text-[#D9D9D9]'>
                  <div className='text-[0.875rem] max-lg:text-[1.875rem] max-md:text-[3.46rem]'>Provisional:</div>
                  <div className='text-[1rem] max-lg:text-[2rem] font-semibold max-md:text-[3.46rem]'>
                    {fCurrency(totalPrice) || 0} VND
                  </div>
                </div>
                <div className='flex justify-between h-[1.5rem] max-lg:h-[3.5rem] max-md:mb-[2.1rem] my-[0.5rem] max-lg:my-[1.5rem] max-md:h-auto text-[#D9D9D9]'>
                  <div className='text-[0.875rem] max-lg:text-[1.875rem] max-md:text-[3.46rem]'>Service Charge 3%:</div>
                  <div className='text-[1rem] max-lg:text-[2rem] font-semibold max-md:text-[3.46rem]'>
                    {fCurrency(totalPrice * 0.03) || 0} VND
                  </div>
                </div>
                <Separator
                  my='3'
                  size='4'
                  color='mint'
                />
                <div className='flex justify-between items-center mt-[0.5rem] h-[2rem] max-md:h-auto text-white max-lg:mt-[2.5rem] max-lg:h-[5rem]'>
                  <div className='text-[1rem] max-lg:text-[2rem] font-bold mt-[0.75rem] max-md:text-[3.73rem]'>
                    Total amount:
                  </div>
                  <h5 className='text-[1.625rem] max-lg:text-[2.625rem] font-bold max-md:text-[3.73rem]'>
                    {fCurrency(totalPrice + servicePrice) || 0} VND
                  </h5>
                </div>
              </div>

              <p>{errors.root?.message}</p>

              <div className='flex items-center mt-[1rem] gap-[1.88rem] max-lg:mb-[2rem] max-md:mb-0 max-md:gap-[2.13rem] max-lg:mt-[2rem] max-md:mt-[3.2rem] max-md:flex-col max-lg:justify-end max-md:justify-start'>
                <Button
                  className='w-[12.1875rem] max-lg:w-fit py-[1rem] px-[2rem] text-[0.8125rem] max-lg:text-[1.8125rem] 
                            font-bold max-md:text-[3.46rem] whitespace-nowrap max-lg:py-[2rem] max-lg:px-[3rem]
                            max-md:w-full max-md:px-[8.52rem] max-md:py-[4.26rem] max-md:rounded-[2.1rem]'
                  primary={true}
                  content={'BOOK & PAY NOW'}
                  type='submit'
                />
                <div className='flex gap-[0.5rem] max-lg:gap-[1.5rem] max-md:gap-[2.1rem]'>
                  <Image
                    className='w-[2.28rem] h-[1.38rem] max-lg:w-[4.28rem] max-lg:h-[3.38rem] object-cover max-md:w-[9.3rem] max-md:h-[5.84rem]'
                    src='/images/visa-card.svg'
                    width={80}
                    height={70}
                  />
                  <Image
                    className='w-[2.28rem] h-[1.38rem] max-lg:w-[4.28rem] max-lg:h-[3.38rem] object-cover max-md:w-[9.3rem] max-md:h-[5.84rem]'
                    src='/images/master-card.svg'
                    width={80}
                    height={70}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </section>
  )
}
