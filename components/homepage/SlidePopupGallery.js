'use client'
import Image from 'next/image'
import { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Autoplay, FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function SlidePopupGallery({ section4, indexTab }) {
  const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })

  const swiperRef = useRef(null)

  const handleNextSlide = () => {
    swiperRef.current?.slideNext()
  }

  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev()
  }
  return (
    <div className='relative w-full h-fit'>
      <Swiper
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 16,
            direction: 'vertical',
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
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1000}
        grabCursor={true}
        freeMode={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        modules={[FreeMode, Autoplay]}
        className={`lg:h-[29.08975rem] md:h-[34rem] w-full max-2xl:h-[26rem] max-md:h-[121rem] max-md:rounded-[4.267rem]`}
      >
        {section4?.listGallery[indexTab]?.slidesImage?.map((e, index) => (
          <SwiperSlide
            key={index}
            className='relative'
          >
            <Image
              className='object-cover w-full h-full rounded-[1rem] max-md:rounded-[4.267rem]'
              src={e?.sourceUrl || '/images/gallery.jpg'}
              alt={e?.altText || e?.title}
              fill
              sizes='100vw'
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {!isMobile && section4?.listGallery[indexTab]?.slidesImage?.length > 2 && (
        <>
          <button
            onClick={handlePrevSlide}
            className='p-[1.5rem] absolute left-[-4.5rem] max-lg:left-[-6.5rem] top-1/2 -translate-y-1/2 z-[5]'
          >
            <Image
              className='object-contain w-[1.82rem] h-[0.82rem] max-lg:w-[3.82rem] max-lg:h-[2.82rem]'
              src={'/images/btn-left.svg'}
              alt='btn-slide'
              width={36}
              height={18}
            />
          </button>
          <button
            onClick={handleNextSlide}
            className='p-[1.5rem] absolute right-[-4.5rem] max-lg:right-[-6.5rem] top-1/2 -translate-y-1/2 z-[5]'
          >
            <Image
              className='object-contain w-[1.82rem] h-[0.82rem] max-lg:w-[3.82rem] max-lg:h-[2.82rem] rotate-180'
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
