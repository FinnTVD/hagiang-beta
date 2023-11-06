'use client'
import Image from 'next/image'
import { memo } from 'react'
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const SlideGallery = ({ section4, setIsOpen, setIndexTab }) => {
  return (
    <Swiper
      breakpoints={{
        0: {
          slidesPerView: 'auto',
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 14,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      }}
      freeMode={true}
      modules={[FreeMode]}
      className='h-[28.75rem] mt-[1.88rem] max-lg:mt-[2.5rem] max-md:mt-[5.33rem] max-md:h-[114.13333rem] max-md:!px-[4.27rem]'
    >
      {section4?.listGallery?.map((e, index) => (
        <SwiperSlide
          key={index}
          className='cursor-pointer group max-md:!w-[82.4rem]'
          onClick={() => {
            setIsOpen(true)
            setIndexTab(index)
          }}
        >
          <div className='w-full h-full relative rounded-[1rem] overflow-hidden max-md:rounded-[3.2rem]'>
            <Image
              className='z-0 object-cover transition-all duration-500 group-hover:scale-110'
              src={e?.thumnail?.sourceUrl || '/images/gallery.jpg'}
              alt={e?.thumnail?.altText || e?.thumnail?.title}
              fill
              sizes='50rem'
            />
            <svg
              className='w-[11rem] h-[11rem] max-lg:w-[15rem] max-lg:h-[15rem] absolute top-1/2 left-1/2 -translate-x-1/2 z-[1] -translate-y-1/2 group-hover:opacity-0 transition-all duration-300 max-md:hidden'
              xmlns='http://www.w3.org/2000/svg'
              width='176'
              height='176'
              viewBox='0 0 176 176'
              fill='none'
            >
              <circle
                cx='88'
                cy='88'
                r='87'
                stroke='white'
                strokeWidth='2'
                strokeLinejoin='round'
                strokeDasharray='10 10'
              />
            </svg>
            <div className='w-[11rem] h-[11rem] max-lg:w-[15rem] max-lg:h-[15rem] x-[2] absolute md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 group-hover:opacity-100 opacity-0 transition-all duration-500 bg-[#cde82b99] scale-90 group-hover:scale-100 backdrop-blur-[3px] rounded-full max-md:w-[73.6rem] max-md:h-[73.6rem] max-md:bottom-[-44.8rem] max-md:opacity-100'></div>
            <span className='absolute md:top-1/2 capitalize left-1/2 -translate-x-1/2 md:-translate-y-1/2 text-white z-[5] text-[1.25rem] font-semibold leading-[1.2] tracking-[0.00188rem] max-md:bottom-[8rem] max-md:text-[5.33rem] max-md:leading-[1.2] max-md:tracking-[0.008rem] font-poppins max-lg:text-[2.25rem]'>
              {e?.category}
            </span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default memo(SlideGallery)
