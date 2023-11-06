'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'

export default function SlideCheersTour({ section2 }) {
  return (
    <Swiper
      loop={true}
      spaceBetween={0}
      slidesPerView={'auto'}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      speed={1500}
      modules={[FreeMode, Autoplay]}
      className='h-[25.6rem] md:!hidden max-md:!px-[4.27rem]'
    >
      {section2?.listTitle?.map((e, index) => (
        <SwiperSlide
          key={index}
          className='!h-full !w-[91.4rem] !flex !justify-center !items-center relative'
        >
          <Image
            className='z-0 object-contain'
            src={'/images/bg-text-cheer.png'}
            alt='text'
            fill
            sizes='100vw'
          />
          <span className='relative w-full line-clamp-1 text-center  z-[1] text-primary-5 font-bold text-[3.5rem] leading-[1.57] tracking-[0.00933rem]'>
            {e?.title}
          </span>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
