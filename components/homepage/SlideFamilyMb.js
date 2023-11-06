'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function SlideFamilyMb({ section6, setTourLeader }) {
  const swiperRef = useRef(null)
  const handleSlideChange = (swiper) => {
    setTourLeader(section6?.listCategory[0]?.listAddress[swiper.realIndex])
  }

  const handleNextSlide = () => {
    swiperRef.current?.slideNext()
  }

  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev()
  }
  return (
    <div className='relative w-full h-fit lg:hidden'>
      <Swiper
        loop={true}
        slidesPerView={1}
        effect={'fade'}
        onSlideChange={handleSlideChange}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        modules={[EffectFade]}
        className='h-[54.93rem] w-full'
      >
        {section6?.listCategory[0]?.listAddress?.map((e, index) => (
          <SwiperSlide
            className=''
            key={index}
          >
            <Image
              className='object-cover w-full h-full rounded-[4.27rem]'
              src={e?.image?.sourceUrl || '/images/item-tour.jpg'}
              alt={e?.image?.altText || e?.image?.title}
              width={600}
              height={400}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {section6?.listCategory[0]?.listAddress?.length > 1 && (
        <>
          <button
            onClick={handlePrevSlide}
            className='p-[1.5rem] absolute left-[1.5rem] top-1/2 -translate-y-1/2 z-[5] brightness-0 invert'
          >
            <Image
              className='object-contain w-[8.53rem] h-[5.82rem] max-lg:w-[5vw] max-lg:h-[auto] max-md:w-[8.53rem] max-md:h-[5.82rem]'
              src={'/images/btn-left.svg'}
              alt='btn-slide'
              width={36}
              height={18}
            />
          </button>
          <button
            onClick={handleNextSlide}
            className='p-[1.5rem] absolute right-[1.5rem] top-1/2 -translate-y-1/2 z-[5] brightness-0 invert'
          >
            <Image
              className='object-contain w-[8.53rem] h-[5.82rem] rotate-180 max-lg:w-[5rem] max-lg:h-[auto] max-md:w-[8.53rem] max-md:h-[5.82rem]'
              src={'/images/btn-left.svg'}
              alt='btn-slide'
              width={36}
              height={18}
            />
          </button>
        </>
      )}
    </div>
  )
}
