'use client'
import Image from 'next/image'
import { useState } from 'react'
import moon from '@/public/images/moon.svg'
import SlideImage from './SlideImage'
import ScrollTrigger from 'react-scroll-trigger'
import useStore from '@/app/(store)/store'

const handleCheckIcon = (category) => {
  switch (category) {
    case 'From Hanoi':
      return '/images/marker.svg'
    case 'Noi Bai Airport':
      return '/images/bus.svg'
    case 'Sapa':
      return '/images/homeLocation.svg'
    case 'Cat Ba Island':
      return '/images/homeLocation.svg'
    case 'Ninh Binh':
      return '/images/homeLocation.svg'
    case 'Ha Giang city':
      return '/images/homeLocation.svg'
    case 'Highlight on loop':
      return '/images/marker.svg'
    case 'Meal':
      return '/images/meal.svg'
    case 'Transport':
      return '/images/bus.svg'
    case 'Accommondation':
      return '/images/homeLocation.svg'
    default:
      return '/images/homeLocation.svg'
  }
}

const handleArrayImg = (arr) => {
  if (!Array.isArray(arr)) return null
  const a = []
  for (let index = 0; index < arr.length; index++) {
    if (Array.isArray(arr[index]?.gallery)) {
      a.push(...arr[index]?.gallery)
    }
  }
  return a
}

function AboutTour({ data, isMobile }) {
  const [activeCate, setActiveCate] = useState(0)
  const [content, setContent] = useState(data?.listCheckin[0])
  const [isShow, setIsShow] = useState(isMobile ? true : false)
  const setIndexTab = useStore((state) => state.setIndexTab)
  const listImgPreview = handleArrayImg(data?.listCheckin)

  return (
    <>
      <section
        className={`${
          isShow ? 'h-[11rem] max-md:h-[15rem] overflow-hidden' : ''
        } flex flex-col md:gap-[1.5rem] lg:gap-[1rem] w-full about-tour relative transition-all duration-500`}
      >
        <div className='flex justify-between max-md:px-[4.27rem] items-center max-md:mb-[1.87rem]'>
          <div className='flex md:gap-[0.625rem] gap-[2.34rem] items-center max-md:flex-row-reverse'>
            <Image
              src={moon}
              alt='moon'
              quality={100}
              className='md:w-[1.75rem] md:h-[1.75rem] w-[4.68384rem] h-[4.68384rem] max-md:hidden'
            />
            <h3
              data-aos='fade-right'
              className='lg:text-[2.125rem] md:text-[3.125rem] text-[4.68384rem]  font-[600] leading-normal tracking-[0.00531rem] font-poppins text-gray-scale-80'
            >
              {data?.step}
            </h3>
          </div>
          <div
            className='cursor-pointer relative z-[50] w-[5.33rem] h-[5.33rem] lg:w-[1.75rem] md:w-[2.75rem] lg:h-[1.75rem] md:h-[2.75rem] flex justify-center items-center bg-primary-70 rounded-full'
            onClick={() => setIsShow(!isShow)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='10'
              height='2'
              viewBox='0 0 10 2'
              fill='none'
              className={`${
                isShow ? 'rotate-90' : ''
              } absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-200`}
            >
              <path
                d='M10 0.164062H0V1.83074H10V0.164062Z'
                fill='white'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='10'
              height='2'
              viewBox='0 0 10 2'
              fill='none'
            >
              <path
                d='M10 0.164062H0V1.83074H10V0.164062Z'
                fill='white'
              />
            </svg>
          </div>
        </div>
        <h4
          className={`${
            isShow ? 'text-gray-scale-50' : 'text-gray-scale-80'
          } md:hidden px-[4.27rem] mb-[2.13rem] text-[1rem] max-lg:text-[1.875rem] leading-normal tracking-[0.0125rem] font-[600] font-poppins max-md:text-[3.5rem] max-md:leading-[1.42] max-md:tracking-[0.03733rem]`}
        >
          {data?.heading}
        </h4>

        {/* info */}
        <div className='flex lg:gap-[4.27rem] md:gap-[2.27rem] max-md:flex-col-reverse'>
          {/* ------------content-left------------ */}
          <div className='relative flex'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='6'
              height='551'
              viewBox='0 0 6 551'
              fill='none'
              className='h-full absolute top-0 left-[0.88rem] max-md:hidden'
            >
              <path
                d='M0.333333 548C0.333333 549.473 1.52724 550.667 3 550.667C4.47276 550.667 5.66667 549.473 5.66667 548C5.66667 546.527 4.47276 545.333 3 545.333C1.52724 545.333 0.333333 546.527 0.333333 548ZM2.5 0V548H3.5V0H2.5Z'
                fill='#B34B1E'
              />
            </svg>
            <div className='ml-[0.88rem] pr-[1.5rem] md:block hidden'></div>
            <div className='flex flex-col md:w-[30rem] lg:w-[25.125rem] gap-[1rem] max-md:px-[4.27rem]'>
              <h4
                data-aos='fade-right'
                data-aos-delay='50'
                className='max-md:hidden text-[1rem] max-lg:text-[1.875rem] leading-normal tracking-[0.0125rem] font-[600] font-poppins text-gray-scale-80 max-md:text-[3.733rem] max-md:leading-[1.42] max-md:tracking-[0.03733rem]'
              >
                {data?.heading}
              </h4>
              {content?.content && (
                <div
                  data-aos='fade-right'
                  data-aos-delay='100'
                  id='content-trip-details'
                  className='md:text-[1.5rem] lg:text-[0.875rem] text-[3.27869rem] font-poppins max-md:pb-[1rem] font-[400] md:leading-[1.375] leading-normal md:tracking-[0.00219rem] tracking-[0.0082rem] text-gray-scale-50'
                  dangerouslySetInnerHTML={{ __html: content?.content }}
                />
              )}
            </div>
          </div>

          {/* ------------content-right----------- */}
          <div className='flex flex-col md:gap-[1.5rem] lg:gap-[1rem] gap-[4.27rem] justify-start font-poppins'>
            <ScrollTrigger onEnter={() => setIndexTab(3)}>
              <div className='flex md:gap-[2rem] lg:gap-[0.75rem] select-none gap-[3.2rem] max-md:overflow-x-auto max-md:px-[4.27rem] max-md:pb-[2rem] whitespace-nowrap slideCategory'>
                {data?.listCheckin?.map((item, index) => (
                  <div
                    key={index}
                    className={`flex md:gap-[1rem] lg:gap-[0.5rem] gap-[2.13rem] cursor-pointer flex-shrink-0 md:rounded-[0.5rem] rounded-[2.13rem] shadow-itemTripDetail items-center md:px-[1.75rem] lg:px-[0.75rem] px-[3.2rem] py-[1.6rem] md:py-[1.375rem] lg:py-[0.375rem] transition-all duration-200 ${
                      index === activeCate ? 'bg-[#FFF0EA]' : 'bg-[#fff]'
                    }`}
                    style={{
                      marginLeft: isMobile && index === 0 && `${activeCate * -25}rem`,
                    }}
                    onClick={() => {
                      setContent(data?.listCheckin[index])
                      setActiveCate(index)
                    }}
                  >
                    <Image
                      alt='icon'
                      src={handleCheckIcon(item?.category)}
                      quality={100}
                      width={30}
                      height={30}
                      className='lg:w-[1rem] lg:h-[1rem] md:w-[2rem] md:h-[2rem] w-[5rem] h-auto'
                    />
                    <h5 className='lg:text-[0.875rem] md:text-[1.875rem] text-[3.73333rem] text-primary-70 font-medium md:leading-[1.25] md:tracking-[0.00875rem] '>
                      {item?.category}
                    </h5>
                  </div>
                ))}
              </div>
            </ScrollTrigger>

            {/* slide image */}
            <div className='lg:w-[54.95rem] md:w-[59.95rem] max-md:px-[4.27rem]'>
              <SlideImage listImageSlide={content?.gallery} />
            </div>
            {/* sub description */}
            <div className='flex md:px-[1.75rem] lg:px-[0.75rem] max-md:mb-[4.27rem] px-[3.2rem] max-md:mx-[4.27rem] md:py-[1.625rem] lg:py-[0.625rem] py-[2.66667rem] self-stretch md:rounded-[0.75rem] rounded-[3.2rem] bg-[#FFF0EA]'>
              <h5 className=' md:text-[1.875rem] lg:text-[0.875rem] text-[3.73333rem] font-[500] leading-normal md:leading-[1.375] tracking-[0.00933rem] text-[#6A2C12] md:tracking-[0.00219rem] '>
                {content?.slogan}
              </h5>
            </div>
          </div>
        </div>
        <div
          onClick={() => setIsShow(false)}
          className={`${
            isShow ? 'z-10 opacity-100' : 'z-[-1] opacity-0'
          } w-full cursor-pointer h-[14rem] max-lg:h-[10.5rem] max-md:h-[16rem] bg-gradient-travelers2 max-md:bg-gradient-detailTourRes2 absolute bottom-[-2px] left-0 transition-all duration-150`}
        ></div>
        <div className='absolute top-0 left-0 -z-10 w-[28rem] h-[63.73333rem] max-md:w-[91rem] md:h-[22.5625rem] lg:h-[19.5625rem] opacity-0'>
          {Array.isArray(listImgPreview) &&
            listImgPreview?.map((image, index) => (
              <Image
                key={index}
                className='absolute top-0 left-0 w-full h-full'
                src={image?.sourceUrl || '/images/imgSlide1.jpg'}
                alt={image?.altText || image?.title}
                width={600}
                height={400}
              />
            ))}
        </div>
      </section>

      <div className='md:hidden border-t border-solid border-[#b34b1e52] max-md:mb-[3.27vw] mx-auto max-md:w-[91.46667rem]'></div>
    </>
  )
}

export default AboutTour
