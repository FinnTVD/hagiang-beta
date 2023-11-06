'use client'

import { useEffect, useRef, useState } from 'react'
import SubTitle from '../global/SubTitle'
import ItemLane from './ItemLane'
import Image from 'next/image'
import Button from '../global/Button'
import { useMediaQuery } from 'react-responsive'
import { useParams } from 'next/navigation'
import IconBtnLeft from '../icons/IconBtnLeft'
import ScrollTrigger from 'react-scroll-trigger'
import useStore from '@/app/(store)/store'

export default function BestTripEver({ data }) {
  const isMobile = useMediaQuery({ query: '(max-width: 1023.9px)' })
  const param = useParams()
  const setIndexTab = useStore((state) => state.setIndexTab)

  const [count, setCount] = useState(0)
  // const [prev, setPrev] = useState(data?.listDay[count]?.router?.sourceUrl)
  // const [next, setNext] = useState(data?.listDay[count + 1]?.router?.sourceUrl)
  // const [animation, setAnimation] = useState(null)
  const [indexCurrent, setIndexCurrent] = useState(1)
  const [indexMb, setIndexMb] = useState(0)

  // useEffect(() => {
  //   setPrev(data?.listDay[count]?.router?.sourceUrl)
  //   setNext(data?.listDay[count]?.router?.sourceUrl)
  // }, [count])

  let dataLength = 0
  let dataArr
  if (data) {
    dataLength = data?.listDay?.length
    dataArr = new Array(dataLength - 1).fill(0)
  }

  const lineRef = useRef(null)
  const dayRef = useRef(null)
  const dayHandler = (index) => {
    setIndexMb(index)
    if (index >= 2 && data?.listDay?.length > 3) {
      lineRef.current.style.transform = 'translateX(-30.8rem)'
      dayRef.current.style.transform = 'translateX(-32.8rem)'
    }
    if (index <= 1 && data?.listDay?.length > 3) {
      lineRef.current.style.transform = 'translateX(0)'
      dayRef.current.style.transform = 'translateX(0)'
    }
  }

  return (
    <section
      className='mt-[6.25rem] max-lg:mt-[14.25rem] w-[87.5rem] max-lg:w-[95vw] mx-auto max-md:mt-[16rem] max-md:w-[91.46667rem] flex justify-between max-md:flex-col bg-white max-lg:overflow-hidden'
      id='mapId'
    >
      <div className='max-lg:w-full'>
        <SubTitle
          title={data?.subtitle}
          subTitle={data?.title}
        />
        {isMobile && (
          <div className='flex items-center mt-[5.3rem]'>
            <div class='boxMap relative h-[77.6rem] w-[91.4rem]'>
              <Image
                src={data?.backgroundMap?.sourceUrl}
                alt='router'
                width={343}
                height={291}
                className={`absolute w-full h-full object-contain transition-all duration-300`}
              />
              {data?.listDay?.map((item, index) => (
                <Image
                  key={index}
                  src={item?.router?.sourceUrl}
                  alt='router'
                  width={343}
                  height={291}
                  className={`${
                    index === indexMb ? 'opacity-100' : 'opacity-0'
                  } absolute w-full h-full object-contain transition-all duration-300`}
                ></Image>
              ))}
            </div>
          </div>
        )}
        <ScrollTrigger onEnter={() => setIndexTab(2)}>
          <div className='mt-[2.88rem] max-md:mt-[5.3rem] font-poppins'>
            <div
              ref={lineRef}
              className='transition-all duration-300'
            >
              <div>
                <Image
                  style={{
                    transform: `translateX(${
                      (indexCurrent - 1) * 12.2 + (indexCurrent === data?.listDay?.length ? 1 : 0) + 'rem'
                    }) ${indexCurrent === data?.listDay?.length ? 'rotateY(180deg)' : ''}`,
                  }}
                  className={` w-[3.37rem] h-[2.25rem] object-contain ml-[1.2rem] transition-all duration-300 max-md:w-[6.4rem] max-md:h-auto max-lg:hidden`}
                  src={'/images/motor.svg'}
                  alt='motor'
                  width={60}
                  height={40}
                  quality={100}
                />
                <Image
                  style={{
                    transform: `translateX(${indexMb * 33.2 + 'rem'}) ${
                      indexMb === data?.listDay?.length - 1 ? 'rotateY(180deg)' : ''
                    }`,
                  }}
                  className={`lg:hidden object-contain ml-[8.8rem] md:ml-[4.8rem] md:w-[7.4rem] transition-all duration-300 w-[6.4rem] h-auto`}
                  src={'/images/motor.svg'}
                  alt='motor'
                  width={60}
                  height={40}
                  quality={100}
                />
              </div>
              <div className='flex items-center ml-[12rem] md:ml-[9rem] gap-[3.2rem] lg:hidden'>
                {data?.listDay?.slice(1)?.map((item, indx) => (
                  <div
                    key={indx}
                    className='flex items-center gap-x-[1rem]'
                  >
                    <svg
                      className='w-[2.1rem]'
                      xmlns='http://www.w3.org/2000/svg'
                      width='8'
                      height='8'
                      viewBox='0 0 8 8'
                      fill='none'
                    >
                      <circle
                        cx='4'
                        cy='4'
                        r='3'
                        stroke='#B34B1E'
                        strokeWidth='2'
                      />
                    </svg>
                    <div className='relative overflow-hidden'>
                      <svg
                        className='w-[26.5rem] h-auto'
                        xmlns='http://www.w3.org/2000/svg'
                        width='94'
                        height='3'
                        viewBox='0 0 94 3'
                        fill='none'
                      >
                        <path
                          d='M1 1.07812H93'
                          stroke='#B34B1E'
                          stroke-opacity='0.26'
                          strokeWidth='2'
                          stroke-linecap='round'
                          strokeDasharray='10 10'
                        />
                      </svg>
                      <div
                        className={`${
                          indx <= indexMb - 1 ? 'translate-x-0' : 'translate-x-[-100%]'
                        } absolute w-full h-[0.5rem] top-0 left-0 bg-[#B34B1E] transition-all duration-300`}
                      ></div>
                    </div>
                    {indx === data?.listDay?.length - 2 && (
                      <svg
                        className='w-[2.1rem]'
                        xmlns='http://www.w3.org/2000/svg'
                        width='8'
                        height='8'
                        viewBox='0 0 8 8'
                        fill='none'
                      >
                        <circle
                          cx='4'
                          cy='4'
                          r='3'
                          stroke='#B34B1E'
                          strokeWidth='2'
                        />
                      </svg>
                    )}
                  </div>
                ))}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='8'
                  height='8'
                  viewBox='0 0 8 8'
                  fill='none'
                  className={`${isMobile && data?.listDay?.length < 4 ? 'hidden' : ''}`}
                >
                  <circle
                    cx='4'
                    cy='4'
                    r='3'
                    stroke='#B34B1E'
                    strokeWidth='2'
                  />
                </svg>
              </div>
            </div>
            <div className='flex gap-x-[5.13rem] relative'>
              {data?.listDay?.map((e, index) => (
                <ItemLane
                  indexCurrent={indexCurrent}
                  data={e}
                  key={index}
                  length={data?.listDay?.length}
                  index={index}
                  setIndexCurrent={setIndexCurrent}
                />
              ))}
              <div className='lg:hidden mt-[5.3rem] w-full'>
                <div className='w-full overflow-x-scroll'>
                  <div
                    className='flex gap-[7.5rem] w-fit md:mx-auto transition-all duration-300'
                    ref={dayRef}
                  >
                    {data?.listDay?.map((e, index) => (
                      <div
                        key={index}
                        onClick={() => dayHandler(index)}
                        className={`${
                          index === indexMb ? 'bg-[#B34B1E]' : 'bg-[#F9F9F9]'
                        } lg:hidden w-[25.3rem] h-[15.46rem] md:h-[12.46rem] rounded-[2rem] flex flex-col justify-center items-center flex-shrink-0`}
                      >
                        <span
                          className={`${
                            index === indexMb ? 'text-white' : 'text-[#898989]'
                          } text-[3.7rem] leading-[1.42] gap-[1rem] font-bold`}
                        >
                          DAY {index + 1}
                        </span>
                        <span className={`${index === indexMb ? 'text-white' : 'text-[#898989]'} text-[3.2rem]`}>
                          {e?.distanceLength}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='mt-[3.7rem]'>
                  {data?.listDay?.map((e, index) => (
                    <div
                      key={index}
                      className={`${index === indexMb ? 'block' : 'hidden'} flex gap-[2.1rem] flex-wrap`}
                    >
                      {e?.listProvince?.map((item) => (
                        <div
                          key={index}
                          className='w-[29rem] md:w-[22rem] h-[7.4rem] flex-shrink-0 text-[#2E2E2E] text-[3.4rem] bg-[#F2FFBF] flex items-center justify-center font-medium rounded-[1rem]'
                        >
                          {item.province}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  // animation.previous()
                  if (count > 0) {
                    setCount(count - 1)
                  }
                  if (indexCurrent > 1) {
                    setIndexCurrent(indexCurrent - 1)
                  }
                }}
                className='p-[0.75rem] absolute top-[1.8rem] left-0 -translate-x-full z-[5] max-lg:hidden'
              >
                <IconBtnLeft className={'w-[1.82rem] h-[0.82rem]'} />
              </button>
              <button
                onClick={() => {
                  // animation.next()
                  if (count < data?.listDay?.length - 1) {
                    setCount(count + 1)
                  }
                  if (indexCurrent < data?.listDay?.length) {
                    setIndexCurrent(indexCurrent + 1)
                  }
                }}
                className={`${
                  data?.listDay?.length === 3 ? 'lg:right-[9rem]' : ''
                } p-[0.75rem] absolute top-[1.8rem] right-0 translate-x-full z-[5] max-lg:hidden`}
              >
                <IconBtnLeft className={'w-[1.82rem] h-[0.82rem] rotate-180'} />
              </button>
            </div>
          </div>
        </ScrollTrigger>
        <div className='flex justify-center mt-[2.5rem] max-lg:mt-[3.5rem] max-md:mt-[5.3rem]'>
          <Button
            primary={true}
            content={'book now'}
            className={'px-[2rem] py-[1rem] max-lg:py-[2.5rem] max-lg:px-[3.5rem]'}
            href={`/${param.slug}#bookingId`}
          />
        </div>
      </div>
      {!isMobile && (
        <div
          data-aos='fade-left'
          className='flex items-center'
        >
          <div class='boxMap relative h-[45rem] w-[45rem]'>
            <Image
              src={data?.backgroundMap?.sourceUrl}
              alt='router'
              width={900}
              height={716}
              className={`absolute w-full h-full object-contain transition-all duration-300`}
            />
            {data?.listDay?.map((item, index) => (
              <Image
                key={index}
                src={item?.router?.sourceUrl}
                alt='router'
                width={900}
                height={716}
                className={`${
                  index === indexCurrent - 1 ? 'opacity-100' : 'opacity-0'
                } absolute w-full h-full object-contain transition-all duration-300`}
              ></Image>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
