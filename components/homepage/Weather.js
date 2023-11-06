'use client'
import Image from 'next/image'
import SubTitle from '../global/SubTitle'
import { useState } from 'react'
import SlideWeather from './SlideWeather'
import { useMediaQuery } from 'react-responsive'

const getMonthNow = () => {
  let now = new Date()
  let month = now.getMonth() // Tháng được đếm từ 0, nên cần cộng thêm 1
  return Number(month)
}
export default function Weather({ section7 }) {
  const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })
  const [month, setMonth] = useState(getMonthNow())

  return (
    <section className='relative mt-[6.25rem] max-md:mt-[16rem] font-poppins'>
      <SubTitle
        title={section7?.title}
        subTitle={section7?.subtitle}
        titleClass={'text-center'}
        subTitleClass={'text-center'}
      />
      <Image
        className='w-[74.625rem] h-[27.25rem] max-lg:w-[80rem] max-lg:h-[36rem] object-cover rounded-[0.75rem] blur-sm mx-auto relative max-md:w-[91.46667rem] max-md:h-[54.93333rem] z-[5] mt-[1.88rem] max-lg:mt-[2.8rem] max-md:rounded-[3.2rem]'
        src={section7?.twelveMonthsOfTheYear[month]?.image?.sourceUrl || '/images/weather.jpg'}
        alt={
          section7?.twelveMonthsOfTheYear[month]?.image?.altText || section7?.twelveMonthsOfTheYear[month]?.image?.title
        }
        width={1200}
        height={500}
        onLoadingComplete={(image) => image.classList.remove('blur-sm')}
      />
      <SlideWeather
        section7={section7}
        month={month}
        setMonth={setMonth}
      />
      <div className='relative z-[5] w-fit mx-auto mt-[1.56rem] max-md:mt-[5.33rem]'>
        <span className='text-[0.875rem] max-lg:text-[1.875rem] font-normal leading-[1.57] tracking-[0.00219rem] text-gray-scale-80 max-md:text-[3.73rem] max-md:tracking-[0.00933rem]'>
          {section7?.twelveMonthsOfTheYear[month]?.slogan}
        </span>
        <div className='flex gap-x-[1rem] max-md:gap-x-[4.27rem] mt-[0.75rem] max-md:mt-[3.2rem] max-md:t-[3.2rem] justify-center'>
          <div className='flex gap-x-[0.5rem] max-lg:gap-x-[1.5rem] max-md:gap-x-[2.13rem] rounded-[10rem] p-[0.75rem] max-lg:p-[1.5rem] max-md:p-[3.2rem] bg-[#f9f9f9] items-center w-fit '>
            <Image
              className='w-[1.5rem] h-[1.5rem] max-lg:w-[3.5vw] max-lg:h-[3.5rem] max-md:w-[6.4rem] max-md:h-[6.4rem] rounded-full'
              src={'/images/sun.svg'}
              alt='sun'
              width={36}
              height={36}
            />
            <span className=' text-[0.875rem] max-lg:text-[1.875rem] max-md:text-[3.733rem] max-md:font-normal max-md:tracking-[0.00933rem] font-normal leading-[1.57] tracking-[0.00219rem] text-gray-scale-50'>
              {section7?.twelveMonthsOfTheYear[month]?.averageTemperature + ' degree'}
            </span>
          </div>
          <div className='flex gap-x-[0.5rem] max-lg:gap-x-[1.5rem] max-md:gap-x-[2.13rem] rounded-[10rem] p-[0.75rem] max-lg:p-[1.5rem] max-md:p-[3.2rem] bg-[#f9f9f9] items-center w-fit'>
            <Image
              className='w-[1.5rem] h-[1.5rem] max-lg:w-[3.5vw] max-lg:h-[3.5rem] max-md:w-[6.4rem] max-md:h-[6.4rem] rounded-full'
              src={'/images/rain.svg'}
              alt='sun'
              width={36}
              height={36}
            />
            <span className=' text-[0.875rem] max-lg:text-[1.875rem] max-md:text-[3.733rem] max-md:font-normal max-md:tracking-[0.00933rem] font-normal leading-[1.57] tracking-[0.00219rem] text-gray-scale-50'>
              {section7?.twelveMonthsOfTheYear[month]?.averageRainfall + ' mm'}
            </span>
          </div>
        </div>
      </div>
      {!isMobile && (
        <Image
          className='z-0 object-cover max-md:hidden'
          src={'/images/mask-weather.png'}
          alt='mask-weather'
          fill
          sizes='100vw'
        />
      )}
      <div className='w-full h-[6rem] bg-gradient-travelers2 absolute bottom-0 left-0 z-[1]'></div>
    </section>
  )
}
