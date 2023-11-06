'use client'
import { useState } from 'react'
import Button from '../global/Button'
import SubTitle from '../global/SubTitle'
import { useMediaQuery } from 'react-responsive'
import { AccordionDemo } from '../ui/AccordionDemo'
import { PopupBookNow } from '../global/PopupBookNow'

export default function TheTrip({ section8, allTourHG, isOther = false }) {
  const [active, setActive] = useState(0)
  const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })

  return (
    <section
      className={`${
        isOther ? 'md:mt-0' : 'md:mt-[6.25rem]'
      } w-[87.5rem] max-lg:w-[95rem] max-md:w-[91.46667rem] mx-auto flex justify-between mt-[16rem] max-lg:flex-col max-md:gap-[8rem] font-poppins`}
    >
      <div className={`${isOther ? 'hidden' : ''} max-lg:mb-[4rem] max-md:mb-0`}>
        <SubTitle
          title={section8?.title}
          subTitle={section8?.subtitle}
        />
        <PopupBookNow allTourHG={allTourHG}>
          <div>
            <Button
              primary={true}
              content={'BOOK NOW'}
              className={'mt-[1.87rem] max-md:hidden'}
            />
          </div>
        </PopupBookNow>
      </div>
      <div className={`${isOther ? 'mx-auto' : ''} flex flex-col md:gap-[1.5rem] lg:gap-[0.75rem] gap-[4.27rem]`}>
        <div className='flex md:gap-[5rem] max-md:justify-between'>
          {section8?.listCategory?.map((e, index) => (
            <div
              key={index}
              data-aos='fade-left'
              data-aos-delay={`${index * 500}`}
              onClick={() => setActive(index)}
              className='max-md:text-center max-md:w-[43.73333rem] max-lg:flex-1'
            >
              <h3
                className={` lg:text-[1.625rem] md:text-[2.625rem] md:w-[26.375rem] text-[4.26667rem] md:font-semibold font-bold md:leading-[1.23] leading-[6.4rem] max-md:tracking-[0.05333rem] font-poppins text-[#B7B7B7] md:text-gray-scale-80 max-md:pb-[1.07rem] ${
                  isMobile && active === index ? '!text-[#B34B1E] border-b max-md:border-b-[2px] border-[#B34B1E] ' : ''
                }`}
              >
                {e?.category}
              </h3>
            </div>
          ))}
        </div>
        <div className='flex md:gap-[5rem]'>
          {section8?.listCategory?.map((e, index) => (
            <div
              key={index}
              className={`${
                (isMobile && active === index) || !isMobile ? '' : 'hidden'
              } md:flex-1 lg:w-[26.375rem] w-full`}
            >
              <p
                data-aos='fade-left'
                data-aos-delay={`${index * 500}`}
                className='md:text-[1.875rem] lg:text-[0.875rem] text-[3.73333rem] font-normal leading-[1.57] md:leading-[1.57] md:mb-[1.5rem] tracking-[0.00933rem] text-gray-scale-50'
              >
                {e?.description}
              </p>
              <AccordionDemo data={e?.listInfo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
