'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function SlidePeople({ section6, indexTab }) {
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
        grabCursor={true}
        breakpoints={{
          0: {
            slidesPerView: 'auto',
            spaceBetween: 16,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
        freeMode={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        modules={[FreeMode]}
        className='h-[25.875rem] max-md:h-[113.93rem] w-full max-lg:h-[45rem]'
      >
        {section6?.listCategory[indexTab]?.listPeople?.map((e, index) => (
          <SwiperSlide
            key={index}
            className='relative cursor-pointer group'
          >
            <Image
              className='object-cover w-full h-full rounded-[1rem] max-md:rounded-[4.27rem]'
              src={e?.avatar?.sourceUrl || '/images/people.jpg'}
              alt={e?.avatar?.altText || e?.avatar?.title}
              width={400}
              height={500}
            />
            <div className='absolute group-hover:opacity-0 transition-all duration-200 z-10 bottom-[1.5rem] left-1/2 -translate-x-1/2 w-[17.75rem] max-md:w-[70.75rem] max-md:h-fit max-md:rounded-[2.13rem] h-[4.9375rem] rounded-[1rem] opacity-90 bg-primary-70 pt-[0.94rem] px-[0.87rem] max-md:px-[1.87rem] max-md:pb-[2.87rem] max-md:pt-[1.94rem] pb-[0.87rem] max-md:bottom-[5.5rem] max-lg:h-[7.5rem] max-lg:w-[40rem] '>
              <h2 className='text-[1rem] font-semibold leading-normal tracking-[0.005rem] text-white text-center line-clamp-1 max-md:text-[4.67rem] max-lg:text-[2.08rem]'>
                {e?.name}
              </h2>
              <div className='text-[0.875rem] max-md:text-[3.875rem] mt-[0.25rem] leading-[1.57] font-normal tracking-[0.00219rem] text-white flex items-center justify-center  max-lg:text-[1.8rem] flex-nowrap whitespace-nowrap'>
                {e?.job}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='5'
                  height='4'
                  viewBox='0 0 5 4'
                  fill='none'
                  className='mx-[0.2rem] w-[0.3rem] h-[0.3rem]'
                >
                  <circle
                    cx='2.5'
                    cy='2'
                    r='2'
                    fill='white'
                  />
                </svg>
                {e?.experience}
              </div>
            </div>
            <div className='absolute z-20 top-0 left-0 max-md:left-1/2 max-md:top-[5%] max-md:-translate-x-1/2 w-full h-full bg-black/50 p-[1.5rem] rounded-[1rem] opacity-0 translate-y-[110%] transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 shadow-btnTravel max-md:rounded-[4.27rem] max-md:p-[4.27rem] max-md:w-[90%] max-md:h-[90%] '>
              <h2 className='text-[1rem] font-semibold leading-normal tracking-[0.005rem] text-primary-50 text-center line-clamp-1 max-md:text-[6rem] max-lg:text-[2rem]'>
                {e?.name}
              </h2>
              <div className='text-[0.875rem] max-md:text-[3.875rem] mt-[0.25rem] leading-[1.57] font-normal tracking-[0.00219rem] text-white flex items-center justify-center line-clamp-2 max-lg:text-[1.8rem] whitespace-nowrap'>
                {e?.job}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='5'
                  height='4'
                  viewBox='0 0 5 4'
                  fill='none'
                  className='mx-[0.59rem] w-[0.3rem] h-[0.3rem]'
                >
                  <circle
                    cx='2.5'
                    cy='2'
                    r='2'
                    fill='white'
                  />
                </svg>
                {e?.experience}
              </div>
              <div className='h-[1px] w-full my-[0.75rem] bg-[#D9D9D9]'></div>
              <p className='text-[0.875rem] max-md:text-[3.875rem] text-white font-normal leading-[1.57] tracking-[0.00219rem] max-lg:text-[1.8rem]'>
                {e?.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {section6?.listCategory[indexTab]?.listPeople?.length > 4 && (
        <>
          <button
            onClick={handlePrevSlide}
            className='p-[1.5rem] absolute left-0 max-md:left-[1.5rem] top-1/2 -translate-y-1/2 z-[5] lg:-translate-x-full'
          >
            <Image
              className='object-contain w-[1.82rem] h-[0.82rem] max-md:w-[8.53rem] max-md:h-[5.82rem] max-lg:w-[5rem] max-lg:h-auto'
              src={'/images/btn-left.svg'}
              alt='btn-slide'
              width={36}
              height={18}
            />
          </button>
          <button
            onClick={handleNextSlide}
            className='p-[1.5rem] absolute right-0 max-md:right-[1.5rem] top-1/2 -translate-y-1/2 z-[5] lg:translate-x-full'
          >
            <Image
              className='object-contain w-[1.82rem] h-[0.82rem] max-md:w-[8.53rem] max-md:h-[5.82rem] rotate-180 max-lg:w-[5rem] max-lg:h-auto'
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
