'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function SlideFamilyV2({ section6, setTourLeader }) {
  const swiperRef = useRef(null)
  const [indexSlider, setIndexSlider] = useState(0)

  const handleSlideChange = (swiper) => {
    setTourLeader(
      section6?.listCategory[0]?.listAddress[swiper.realIndex >= 4 ? swiper.realIndex - 4 : swiper.realIndex],
    )
    setIndexSlider(swiper.realIndex)
  }

  const handleNextSlide = () => {
    swiperRef.current.slideNext()
  }

  const handlePrevSlide = () => {
    swiperRef.current.slidePrev()
  }

  return (
    <div
      id='box-slide-family'
      className='relative w-fit h-fit max-lg:hidden rounded-[1rem] overflow-hidden'
    >
      <Swiper
        loop={true}
        spaceBetween={24}
        slidesPerView={1.4}
        grabCursor={true}
        onSlideChange={handleSlideChange}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        className='h-[25.825rem] w-[50.5rem]'
      >
        {section6?.listCategory[0]?.listAddress &&
          Array.isArray(section6?.listCategory[0]?.listAddress) &&
          [...section6?.listCategory[0]?.listAddress, ...section6?.listCategory[0]?.listAddress]?.map((e, index) => (
            <SwiperSlide
              className='!h-full rounded-[1rem] select-none transition-all duration-1000 relative '
              key={index}
            >
              <Image
                className='w-full object-cover h-full rounded-[1rem] absolute top-0 left-0 transition-all duration-1000'
                src={e?.image?.sourceUrl || '/images/item-tour.jpg'}
                alt={e?.image?.altText || e?.image?.title}
                width={800}
                height={600}
              />
            </SwiperSlide>
          ))}
      </Swiper>
      {section6?.listCategory[0]?.listAddress?.length > 1 && (
        <>
          <button
            onClick={handlePrevSlide}
            className='p-[1.5rem] absolute left-[-0.5rem] top-1/2 -translate-y-1/2 z-[5] brightness-0 invert'
          >
            <Image
              className='object-contain w-[1.82rem] h-[0.82rem]'
              src={'/images/btn-left.svg'}
              alt='btn-slide'
              width={36}
              height={18}
            />
          </button>
          <button
            onClick={handleNextSlide}
            className='p-[1.5rem] absolute right-[-0.5rem] top-1/2 -translate-y-1/2 z-[5] brightness-0 invert'
          >
            <Image
              className='object-contain w-[1.82rem] h-[0.82rem] rotate-180'
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
