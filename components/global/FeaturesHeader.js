'use client'
import Link from 'next/link'
import { PopupBookNow } from './PopupBookNow'
import IconPhoneHeaderV2 from '../icons/IconPhoneHeaderV2'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

gsap.registerPlugin(ScrollTrigger)
export default function FeaturesHeader({ header, allTourHG, isHome }) {
  const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })
  const [scrollY, setScrollY] = useState(0)

  const circleRef = useRef(null)
  useEffect(() => {
    // Define a function to handle the scroll event
    const handleScroll = () => {
      // Update the state with the current scroll position
      setScrollY(window.scrollY)
    }
    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll)

    gsap.to(circleRef.current, {
      scrollTrigger: {
        trigger: 'body',
        scrub: true,
        start: 'top top',
        end: 'bottom bottom',
      },
      strokeDashoffset: '0',
    })
    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    if (typeof window === 'undefined') return
    window.scrollTo(0, 0, { behavior: 'smooth' })
  }
  return (
    <div
      id='feature-header'
      className={`${
        isMobile && isHome ? (scrollY >= 250 ? 'flex' : 'hidden') : 'flex'
      } bottom-[10rem] max-md:bottom-[20rem] lg:bottom-[3rem] lg:right-[1rem] lg:w-[6rem] lg:h-[15rem] flex-col gap-y-[1.37rem] max-md:gap-y-[5.33rem] md:h-[40rem] md:w-[10rem] items-center fixed right-[3rem] max-md:right-[4.27rem] z-[999]`}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='38'
        height='38'
        viewBox='0 0 38 38'
        fill='none'
        className='w-[3.5rem] h-[3.6rem] max-lg:w-[7.25rem] max-lg:h-[7.35rem] max-md:w-[10.5rem] max-md:h-[10.6rem] mb-[2vw] max-lg:mb-[4vw] max-md:mb-[3vw] cursor-pointer'
        onClick={scrollToTop}
      >
        <path
          d='M19.8438 7.64502C19.5629 6.78499 18.4371 6.78499 18.1562 7.64502L14.0518 20.2088C13.8463 20.8378 14.2782 21.4973 14.8956 21.4973L23.1044 21.4973C23.7218 21.4973 24.1537 20.8378 23.9482 20.2088L19.8438 7.64502Z'
          fill='#FC692A'
          className='translate-y-[10%]'
        />
        <rect
          x='0.5'
          y='0.5'
          width='37'
          height='37'
          rx='18.5'
          stroke='#FC692A'
          strokeDasharray='116'
          strokeDashoffset='116'
          ref={circleRef}
        />
      </svg>
      <PopupBookNow allTourHG={allTourHG}>
        <div className='cursor-pointer w-[3.5rem] text-[0.75rem] font-extrabold leading-[1.08] tracking-[0.03125rem] h-[3.5rem] rounded-full text-white flex text-center justify-center items-center bg-primary-50 border-[1.5px] border-solid border-white max-md:w-[10.67rem] max-lg:text-[1.75rem] max-lg:w-[7.5rem] max-lg:h-[7.5rem] max-md:h-[10.67rem] max-md:text-[2.56rem] max-md:tracking-[0.10667rem]  animate-bounce max-md:hidden'>
          BOOK NOW
        </div>
      </PopupBookNow>
      <Link
        href={`https://api.whatsapp.com/send?phone=${header?.phoneNumber}`}
        target='_blank'
        className='relative block cursor-pointer max-md:hidden'
      >
        {/* <div className='box-phone absolute bottom-0 left-0 z-0 w-[2.5rem] h-[2.5rem] rounded-full'></div> */}

        {/* <IconPhoneHeader className={'z-[1]'} /> */}
        <IconPhoneHeaderV2
          className={
            'z-[1] lg:w-[3.125rem] lg:h-[3.125rem] absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
          }
        />
        <div className='lg:w-[3.125rem] lg:h-[3.125rem] md:w-[6.5rem] md:h-[6.5rem] pingCall bg-[#cecece] rounded-full z-0'></div>
      </Link>
    </div>
  )
}
