'use client'

import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import ItemCardTour from './ItemCardTour'
import { useMediaQuery } from 'react-responsive'
import Image from 'next/image'
import IconMotor from '../icons/IconMotor'

const arr = new Array(2).fill(0)

export default function SlideGreatTrips({ allTourHG }) {
  const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })
  const swiperRef = useRef(null)
  const [indexTab, setIndexTab] = useState(0)

  const handleSlideChange = (swiper) => {
    setIndexTab(swiper.realIndex)
  }

  const handleSlideTo = (index) => {
    if (index === indexTab) return
    swiperRef.current?.slideNext()
  }

  const listTour = Array.isArray(allTourHG?.nodes) ? [...allTourHG?.nodes].reverse() : {}

  return (
    <>
      {isMobile && (
        <div className='w-full select-none flex gap-x-[3.2rem] px-[4.27rem] my-[5.33rem] relative z-20 cursor-pointer font-poppins'>
          {arr?.map((e, index) => (
            <div
              key={index}
              className={`${
                indexTab === index ? 'bg-primary-5' : 'bg-white'
              } flex flex-1 justify-center items-center h-fit gap-x-[2.13rem] rounded-[2.133rem] shadow-btnTravel select-none`}
              onClick={() => handleSlideTo(index)}
            >
              <IconMotor className={'w-[5.33rem] h-[5.33rem]'} />
              <span
                className={`${
                  indexTab === index ? 'text-primary-70' : 'text-gray-scale-80'
                } text-[3.733rem] font-semibold leading-[1.42] tracking-[0.03733rem] py-[3.2rem]`}
              >
                {index === 0 ? '3 DAYS TOUR' : '4 DAYS TOUR'}
              </span>
            </div>
          ))}
        </div>
      )}
      <div
        data-aos='zoom-in-up'
        className='flex justify-center items-end gap-x-[1.5rem] relative z-10 h-fit mt-[0.5rem] max-md:mt-[-5.5rem]'
      >
        <Swiper
          loop={true}
          grabCursor={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
          }}
          onSlideChange={handleSlideChange}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper
          }}
          className='lg:w-[87.1rem] !px-[3rem] max-md:h-[128rem] max-md:!px-[4.27rem] lg:h-[40rem] md:h-[55rem]'
        >
          {Array.isArray(listTour) &&
            listTour?.map((e, index) => (
              <SwiperSlide
                key={index}
                className='relative rounded-[1.5rem] max-md:rounded-[4.267rem] !flex items-center'
              >
                <ItemCardTour
                  data={e}
                  allTourHG={allTourHG}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      {!isMobile ? (
        <Image
          className='object-cover absolute top-0 left-0 w-full h-[38rem] max-lg:h-[52rem] z-[1]'
          src={'/images/mask-great-trips.png'}
          alt='great trips'
          width={1600}
          height={800}
          quality={100}
        />
      ) : (
        <div
          id='great-trips-mb'
          className='w-full h-fit max-md:top-[-10rem] absolute top-0 left-0 z-[1] '
        >
          <Image
            className='object-fill w-full h-[58rem]'
            src={'/images/bg-great-trip.png'}
            alt='great trips'
            width={800}
            height={400}
            quality={100}
          />
          <div className='absolute bottom-0 left-0 z-[2] w-full h-[30rem] bg-gradient-greatTrips'></div>
        </div>
      )}
    </>
  )
}
