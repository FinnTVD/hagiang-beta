'use client'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Autoplay, FreeMode } from 'swiper/modules'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'

function SlideImage({ listImageSlide }) {
  const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })

  const swiperRef = useRef(null)
  const handleNextSlide = () => {
    swiperRef.current?.slideNext()
  }
  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev()
  }

  return (
    <div className='relative'>
      <Swiper
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
        }}
        grabCursor={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1000}
        freeMode={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        modules={[FreeMode, Autoplay]}
      >
        {listImageSlide?.map((image, index) => (
          <SwiperSlide
            key={index}
            className=''
          >
            <Image
              className='w-full h-[63.73333rem] md:h-[22.5625rem] lg:h-[19.5625rem] md:rounded-[1rem] rounded-[3.2rem] select-none'
              src={image?.sourceUrl || '/images/imgSlide1.jpg'}
              alt={image?.altText || image?.title}
              width={600}
              height={400}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {(listImageSlide?.length > 2 && !isMobile) || (listImageSlide?.length > 1 && isMobile) ? (
        <div className='flex justify-between absolute w-full z-[1] top-[50%] md:pl-[1rem] lg:px-[1rem] max-md:px-[7.2rem]'>
          <button
            onClick={handlePrevSlide}
            className='md:w-[4.8125rem] md:h-[3.81025rem] lg:w-[1.8125rem] lg:h-[0.81025rem]'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='29'
              height='13'
              viewBox='0 0 29 13'
              fill='none'
            >
              <path
                d='M0.940433 7.10513C0.353189 6.89787 0.353188 6.06738 0.940435 5.86011L16.0169 0.538997C16.4464 0.387408 16.8968 0.706036 16.8968 1.1615L16.8968 11.8037C16.8968 12.2592 16.4464 12.5778 16.0169 12.4262L0.940433 7.10513Z'
                fill='#B34B1E'
                stroke='#B34B1E'
              />
            </svg>
          </button>

          <button
            onClick={handleNextSlide}
            className='md:w-[4.8125rem] md:h-[3.81025rem] lg:w-[1.8125rem] lg:h-[0.81025rem]'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='29'
              height='14'
              viewBox='0 0 29 14'
              fill='none'
            >
              <path
                d='M28.0596 7.68325C28.6468 7.47599 28.6468 6.6455 28.0596 6.43824L12.9831 1.11712C12.5536 0.965533 12.1032 1.28416 12.1032 1.73963L12.1032 12.3819C12.1032 12.8373 12.5536 13.156 12.9831 13.0044L28.0596 7.68325Z'
                fill='#B34B1E'
                stroke='#B34B1E'
              />
            </svg>
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default SlideImage
