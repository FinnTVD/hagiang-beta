'use client'

import { useRef, useState } from 'react'
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function SlideTabFamily({ setIndexTab, section6 }) {
  const swiperRef = useRef()
  const [indexSlider, setIndexSlider] = useState(0)
  const handleSlideChange = (swiper) => {
    setIndexSlider(swiper.activeIndex)
  }

  return (
    <div
      id='box-slide-family'
      className='relative w-fit h-fit max-md:w-full'
    >
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 'auto',
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 'auto',
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 'auto',
            spaceBetween: 36,
          },
        }}
        freeMode={true}
        onSlideChange={handleSlideChange}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        modules={[FreeMode]}
        className='h-[1.5rem] max-md:h-[5.33rem] w-fit lg:mr-[-2.25rem] max-md:w-full max-lg:h-[3.5rem]'
      >
        {section6?.listCategory?.map((e, index) => (
          <SwiperSlide
            className={`${
              indexSlider === index
                ? 'text-primary-70 before:absolute before:left-0 before:w-full before:border before:border-solid before:border-primary-70 before:bottom-[-0.25rem] max-md:before:bottom-0'
                : 'text-gray-scale-20 before:absolute before:top-[0.25rem] before:left-0 before:w-full before:h-full before:border-b-[2px] before:border-den-2 before:scale-x-0 before:origin-right before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-left max-md:text-[#6b6b6b]'
            } !w-fit !h-[1.25rem] max-md:!h-[5.33rem] text-[0.875rem] font-semibold leading-[1.42] tracking-[0.00875rem] cursor-pointer relative max-md:text-[3.2rem] max-md:font-semibold max-md:leading-[1.33] max-md:whitespace-nowrap max-lg:text-[1.8rem] max-lg:!h-[3.5rem] `}
            key={index}
            onClick={() => {
              setIndexSlider(index)
              setIndexTab(index)
            }}
          >
            {e?.category}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
