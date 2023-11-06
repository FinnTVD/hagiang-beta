'use client'
import { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import SubTitle from '../global/SubTitle'
import Button from '../global/Button'
import SlideTabFamily from './SlideTabFamily'
import SlidePeople from './SlidePeople'
import SlideFamilyMb from './SlideFamilyMb'
import IconPeople from '../icons/IconPeople'
import IconMotor from '../icons/IconMotor'
import IconCheck from '../icons/IconCheck'
import SlideFamilyV2 from './SlideFamilyV2'
import Image from 'next/image'

const handleArrayImg = (arr) => {
  if (!Array.isArray(arr)) return null
  const a = []
  for (let index = 0; index < arr.length; index++) {
    if (Array.isArray(arr[index]?.listPeople)) {
      a.push(...arr[index]?.listPeople)
    }
  }
  return a
}

export default function Family({ section6 }) {
  const isTablet = useMediaQuery({ query: '(max-width: 1023px)' })
  const contentRef = useRef(null)
  const [indexTab, setIndexTab] = useState(0)
  const [tourLeader, setTourLeader] = useState(section6?.listCategory[0]?.listAddress[0])
  const listImgPreview = handleArrayImg(section6?.listCategory)
  useEffect(() => {
    if (typeof window === 'undefined' || !contentRef.current) return
    if (window.innerWidth < 768) return
    if (contentRef.current.offsetHeight > (11 * window.innerWidth) / 100) {
      contentRef.current.style.height = '11rem'
      contentRef.current.style.overflowY = 'scroll'
    }
  }, [])

  return (
    <section className='mx-auto mt-[6.25rem] max-md:px-[4.27rem] max-md:mt-[16rem] font-poppins w-[87.5rem] max-lg:w-full max-lg:px-[3.2vw] relative'>
      <div className='relative z-10'>
        <div className='flex justify-between items-end mb-[1.87rem] max-md:mb-[5.33rem] max-lg:flex-col max-md:gap-y-[5.33rem] max-lg:gap-y-[2.5rem]'>
          <SubTitle
            title={section6?.title}
            subTitle={section6?.subTitle}
          />
          <div className='w-[50.5rem] max-lg:w-full'>
            <SlideTabFamily
              setIndexTab={setIndexTab}
              indexTab={indexTab}
              section6={section6}
            />
          </div>
        </div>
        {indexTab === 0 ? (
          <div className='flex gap-x-[1.44rem] max-lg:flex-col-reverse max-md:gap-y-[5.33rem] max-lg:gap-y-[2.5rem]'>
            <div
              data-aos='fade-right'
              className='relative flex-1'
            >
              <h2 className='mb-[0.5rem] max-md:mb-[1.07rem] text-[1.625rem] font-semibold leading-[1.23] text-gray-scale-50 uppercase max-md:text-[5.33rem] max-md:leading-[1.2] max-md:tracking-[0.0008rem] max-lg:text-[3.38rem]'>
                {tourLeader?.title}
              </h2>
              <p
                ref={contentRef}
                id='content-family'
                className='lg:w-[28.0945rem] text-gray-scale-50 mb-[1.25rem] max-md:mb-[3.2rem] text-[0.875rem] font-normal leading-[1.57] tracking-[0.00219rem] max-md:text-[3.733rem] max-md:tracking-[0.00933rem] max-lg:text-[1.8rem]'
              >
                {tourLeader?.description}
              </p>
              <div className='h-fit lg:absolute lg:bottom-0 lg:left-0 lg:z-10'>
                <div className='flex items-center'>
                  <IconPeople className='w-[1rem] h-[1rem] max-md:w-[4.5rem] max-md:h-[4.5rem] max-lg:w-[2rem] max-lg:h-[2rem]' />
                  <span className='inline-block mr-[0.25rem] max-md:mr-[1.07rem] max-md:ml-[1.6rem] ml-[0.37rem] text-[0.875rem] text-primary-70 font-semibold leading-[1.57] tracking-[0.00219rem] max-md:text-[3.73rem] max-md:tracking-[0.00933rem] max-lg:text-[1.8rem] max-lg:mr-[0.75rem]'>
                    Group size:
                  </span>
                  <span className='text-[0.875rem] leading-[1.57] tracking-[0.00219rem] font-normal text-gray-scale-50 max-md:tracking-[0.00933rem] max-md:text-[3.733rem] max-md:font-medium max-lg:text-[1.8rem]'>
                    {tourLeader?.groupSize}
                  </span>
                </div>
                <div className='flex items-center my-[0.5rem] max-md:my-[2.13rem]'>
                  <IconMotor className='w-[1rem] h-[1rem] max-md:w-[4.5rem] max-md:h-[4.5rem] max-lg:w-[2rem] max-lg:h-[2rem]' />
                  <span className='inline-block mr-[0.25rem] max-md:mr-[1.07rem] max-md:ml-[1.6rem] ml-[0.37rem] text-[0.875rem] text-primary-70 font-semibold leading-[1.57] tracking-[0.00219rem] max-md:text-[3.73rem] max-md:tracking-[0.00933rem] max-lg:text-[1.8rem] max-lg:mr-[0.75rem]'>
                    Transport:
                  </span>
                  <span className='text-[0.875rem] leading-[1.57] tracking-[0.00219rem] font-normal text-gray-scale-50 max-md:tracking-[0.00933rem] max-md:text-[3.733rem] max-md:font-medium max-lg:text-[1.8rem]'>
                    {tourLeader?.transport}
                  </span>
                </div>
                <div className='flex items-center'>
                  <IconCheck className='w-[1rem] h-[1rem] max-md:w-[4.5rem] max-md:h-[4.5rem] max-lg:w-[2rem] max-lg:h-[2rem]' />
                  <span className='inline-block mr-[0.25rem] max-md:mr-[1.07rem] max-md:ml-[1.6rem] ml-[0.37rem] text-[0.875rem] text-primary-70 font-semibold leading-[1.57] tracking-[0.00219rem] max-md:text-[3.73rem] max-md:tracking-[0.00933rem] max-lg:text-[1.8rem] max-lg:mr-[0.75rem]'>
                    Trip completed:
                  </span>
                  <span className='text-[0.875rem] leading-[1.57] tracking-[0.00219rem] font-normal text-gray-scale-50 max-md:tracking-[0.00933rem] max-md:text-[3.733rem] max-md:font-medium max-lg:text-[1.8rem]'>
                    {tourLeader?.tripCompleted}
                  </span>
                </div>
                <div className='flex gap-x-[1rem] mt-[1.88rem] max-md:mt-[5.33rem] max-md:gap-x-[3.2rem]'>
                  <Button
                    content={'JOIN WITH US'}
                    primary={true}
                    href={tourLeader?.joinWithUs?.url || '/'}
                    className='max-md:w-full'
                  />
                  <Button
                    href={'tel:' + tourLeader?.callUs}
                    content={'CALL US'}
                    className='max-md:w-full'
                  />
                </div>
              </div>
            </div>
            {isTablet ? (
              <SlideFamilyMb
                setTourLeader={setTourLeader}
                section6={section6}
              />
            ) : (
              <SlideFamilyV2
                setTourLeader={setTourLeader}
                section6={section6}
              />
            )}
          </div>
        ) : (
          <SlidePeople
            section6={section6}
            indexTab={indexTab}
          />
        )}
      </div>
      <div className='h-[25.875rem] max-md:h-[113.93rem] w-[20.75rem] max-md:w-[91rem] max-lg:h-[45rem] top-0 left-0 opacity-0 absolute -z-10'>
        {Array.isArray(listImgPreview) &&
          listImgPreview?.map((e, index) => (
            <Image
              key={index}
              className='object-cover w-full h-full absolute top-0 left-0 '
              src={e?.avatar?.sourceUrl || '/images/people.jpg'}
              alt={e?.avatar?.altText || e?.avatar?.title}
              width={400}
              height={500}
            />
          ))}
      </div>
    </section>
  )
}
