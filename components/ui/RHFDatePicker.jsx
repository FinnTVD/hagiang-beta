'use client'
import { forwardRef, useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import dateImg from '@/public/images/date.svg'

import Image from 'next/image'

const RHFDatePicker = ({ selected, onChange, end, long, details = false, ...other }) => {
  const [formattedDate, setFormattedDate] = useState()
  useEffect(() => {
    const currentDate = new Date()
    if (end && long) {
      const updatedDate = new Date(currentDate.getTime() + Number(long) * 24 * 60 * 60 * 1000)
      const day = String(updatedDate.getDate()).padStart(2, '0') // Ensure two digits for the day
      const month = String(updatedDate.getMonth() + 1).padStart(2, '0') // Months are 0-based, so add 1 and ensure two digits
      const year = updatedDate.getFullYear()
      setFormattedDate(`${day}/${month}/${year}`)
    } else {
      const day = String(currentDate.getDate()).padStart(2, '0') // Ensure two digits for the day
      const month = String(currentDate.getMonth() + 1).padStart(2, '0') // Months are 0-based, so add 1 and ensure two digits
      const year = currentDate.getFullYear()
      setFormattedDate(`${day}/${month}/${year}`)
    }
  }, [])

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <p
      className='example-custom-input whitespace-nowrap'
      onClick={onClick}
      ref={ref}
    >
      {value || formattedDate}
    </p>
  ))

  return (
    <div
      id='date-booking'
      className={`${selected ? 'text-gray-scale-80' : 'text-gray-scale-20'} ${
        details ? 'lg:py-[1rem] xl:py-[0.75rem]' : 'py-[0.75rem]'
      } bg-[#F2F2F2] w-full rounded-[0.5rem] !h-fit max-md:!h-fit text-[0.875rem] leading-[1.42] tracking-[0.00875rem] px-[1rem] outline-0 max-md:rounded-[2.13rem] max-md:px-[4.26rem] !cursor-pointer max-md:w-full max-md:text-[3.467rem] font-normal max-md:leading-[1.38] md:!text-[1.875rem] lg:!text-[0.875rem] max-lg:!h-fit relative md:py-[0.75rem]`}
    >
      <DatePicker
        className={`${selected ? 'text-gray-scale-80' : 'text-gray-scale-20'} ${
          details ? 'lg:py-[1rem] xl:py-[0.75rem]' : 'py-[0.75rem]'
        } bg-[#F2F2F2] w-full rounded-[0.5rem] !h-fit max-md:!h-fit text-[0.875rem] leading-[1.42] tracking-[0.00875rem] px-[1rem] outline-0 max-md:rounded-[2.13rem] max-md:px-[4.26rem] !cursor-pointer max-md:w-full max-md:text-[3.467rem] font-normal max-md:leading-[1.38] md:!text-[1.875rem] lg:!text-[0.875rem] max-lg:!h-fit`}
        selected={selected}
        onChange={onChange}
        placeholderText={formattedDate}
        dateFormat='dd/MM/yyyy'
        defaultValue={formattedDate}
        customInput={<ExampleCustomInput />}
        {...other}
      />
      <Image
        className='absolute top-1/2 max-md:right-[4.26rem] right-[1rem] translate-y-[-50%] pointer-events-none max-lg:hidden max-md:block'
        src={dateImg}
        alt='date cheers'
      />
    </div>
  )
}

export default RHFDatePicker
