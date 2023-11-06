'use client'

import 'swiper/css/effect-fade'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade } from 'swiper/modules'
import ItemVideoV2 from './ItemVideoV2'

let arrSlide = []
export default function SlideBanner({ section1, isMobile, isActive }) {
  const swiperRef = useRef(null)
  const [indexSlider, setIndexSlider] = useState(0)
  const handleSlideChange = (swiper) => {
    setIndexSlider(swiper.realIndex)
  }

  const handleNextSlide = () => {
    swiperRef.current?.slideNext()
  }

  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev()
  }

  useEffect(() => {
    const video = document.getElementById('videoBanner' + indexSlider)
    video && video?.play()
  }, [indexSlider])

  arrSlide = isMobile ? section1?.slidesVideoMobile : section1?.slidesVideo
  return (
    <div className='relative w-full h-full'>
      <Swiper
        grabCursor={true}
        slidesPerView={1}
        effect={'fade'}
        onSlideChange={handleSlideChange}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        modules={[EffectFade]}
        className='w-full h-full'
        id='slide-video'
      >
        {arrSlide?.length &&
          arrSlide?.map((e, index) => (
            <SwiperSlide
              key={index}
              className='relative'
            >
              <ItemVideoV2
                e={e}
                index={index}
                indexSlider={indexSlider}
                isActive={isActive}
              />
            </SwiperSlide>
          ))}
      </Swiper>
      {arrSlide?.length > 1 && (
        <>
          <button
            onClick={handlePrevSlide}
            id='btn-left'
            className='p-[1.5rem] absolute left-[4.85rem] top-1/2 -translate-y-1/2 brightness-0 invert z-50'
          >
            <Image
              className='object-contain w-[1.82rem] h-[0.82rem] max-lg:w-[7.73333rem] max-lg:h-[3.45707rem]'
              src={'/images/btn-left.svg'}
              alt='btn-slide'
              width={36}
              height={18}
            />
          </button>
          <button
            id='btn-right'
            onClick={handleNextSlide}
            className='p-[1.5rem] absolute right-[4.85rem] top-1/2 -translate-y-1/2 z-50 brightness-0 invert'
          >
            <Image
              className='object-contain w-[1.82rem] h-[0.82rem] max-lg:w-[7.73333rem] max-lg:h-[3.45707rem] rotate-180'
              src={'/images/btn-left.svg'}
              alt='btn-slide'
              width={36}
              height={18}
            />
          </button>
        </>
      )}
      <div
        id='box-icon'
        className='gap-x-[2.5rem] flex w-fit h-fit absolute bottom-[3.5rem] max-lg:bottom-[5.33rem] left-1/2 lg:-translate-x-1/2 z-50 lg:opacity-0 max-lg:flex-col max-lg:left-[4.27rem] max-lg:gap-y-[3.2rem] font-poppins'
      >
        <div className='flex lg:flex-col max-lg:gap-x-[2.13rem] items-center lg:justify-center'>
          <Image
            className='object-contain w-[3rem] h-[3rem] max-lg:w-[8.533rem] max-lg:h-[8.533rem]'
            src={'/images/award.svg'}
            alt='award'
            width={50}
            height={50}
          />
          <div className='flex flex-col lg:items-center'>
            <span className='mt-[0.5rem] text-white text-[1.25rem] max-lg:text-[4.27rem] max-lg:font-bold max-lg:leading-normal max-lg:tracking-[-0.08533rem] font-bold leading-[1.2] tracking-[0.00188rem]'>
              Top #1
            </span>
            <span className='text-[0.875rem] text-white max-lg:text-[3.2rem] max-lg:leading-[1.33rem] font-normal leading-[1.57] tracking-[0.00219rem]'>
              Epic loop in Vietnam
            </span>
          </div>
        </div>
        <div className='flex lg:flex-col max-lg:gap-x-[2.13rem] items-center lg:justify-center'>
          <Image
            className='object-contain w-[3rem] h-[3rem] max-lg:w-[8.533rem] max-lg:h-[8.533rem]'
            src={'/images/agency.svg'}
            alt='agency'
            width={50}
            height={50}
          />
          <div className='flex flex-col lg:items-center'>
            <span className='mt-[0.5rem] text-white text-[1.25rem] max-lg:text-[4.27rem] max-lg:font-bold max-lg:leading-normal max-lg:tracking-[-0.08533rem] font-bold leading-[1.2] tracking-[0.00188rem]'>
              300 km
            </span>
            <span className='text-[0.875rem] text-white max-lg:text-[3.2rem] max-lg:leading-[1.33rem] font-normal leading-[1.57] tracking-[0.00219rem]'>
              North of Hanoi
            </span>
          </div>
        </div>
        <div className='flex lg:flex-col max-lg:gap-x-[2.13rem] items-center lg:justify-center'>
          <Image
            className='object-contain w-[3rem] h-[3rem] max-lg:w-[8.533rem] max-lg:h-[8.533rem]'
            src={'/images/buswhite.svg'}
            alt='bus'
            width={50}
            height={50}
          />
          <div className='flex flex-col lg:items-center'>
            <span className='mt-[0.5rem] text-white text-[1.25rem] max-lg:text-[4.27rem] max-lg:font-bold max-lg:leading-normal max-lg:tracking-[-0.08533rem] font-bold leading-[1.2] tracking-[0.00188rem]'>
              6 hours
            </span>
            <span className='text-[0.875rem] text-white max-lg:text-[3.2rem] max-lg:leading-[1.33rem] font-normal leading-[1.57] tracking-[0.00219rem]'>
              Bus drive
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
