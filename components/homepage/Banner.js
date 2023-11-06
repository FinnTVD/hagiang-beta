'use client'

import Image from 'next/image'
import SlideBanner from './SlideBanner'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

gsap.registerPlugin(ScrollTrigger)
export default function Banner({ section1 }) {
  const parentRef = useRef(null)
  const isMobile = useMediaQuery({ query: '(max-width: 1023.9px)' })
  const [isActive, setIsActive] = useState(false)
  useEffect(() => {
    let ctx = gsap.context(() => {
      setTimeout(() => {
        ScrollTrigger.create({
          trigger: parentRef.current,
          start: 'top center',
          end: 'bottom center',
          onToggle: (self) => {
            if (self.isActive) {
              setIsActive(true)
            } else {
              setIsActive(false)
            }
          },
        })
        gsap.matchMedia().add('(min-width: 1024px)', () => {
          gsap.to('#subtitle', {
            color: '#fff',
            scrollTrigger: {
              trigger: parentRef.current,
              start: 'top 60%',
              end: 'top top',
              scrub: 1,
              once: true,
            },
          })
          gsap.to('#title', {
            color: '#fff',
            scrollTrigger: {
              trigger: parentRef.current,
              start: 'top 60%',
              end: 'top top',
              scrub: 1,
              once: true,
            },
          })
          gsap.to('#text-vn', {
            color: '#fff',
            fontSize: '2.93169rem',
            letterSpacing: '0.02931rem',
            marginTop: '1.75rem',
            transform: 'translateY(4rem)',
            scrollTrigger: {
              trigger: parentRef.current,
              start: 'top 60%',
              end: 'top top',
              scrub: 1,
              once: true,
            },
          })
          gsap.to('#box-title', {
            transform: 'translateY(4rem)',
            scrollTrigger: {
              trigger: parentRef.current,
              start: 'top 60%',
              end: 'top top',
              scrub: 1,
              once: true,
            },
          })
          gsap.to('#box-slide', {
            width: '100vw',
            height: '100vh',
            scrollTrigger: {
              trigger: parentRef.current,
              start: 'top 60%',
              end: 'top 15%',
              scrub: 1,
              once: true,
            },
          })
          gsap.to('#overlay', {
            height: '100vh',
            scrollTrigger: {
              trigger: parentRef.current,
              start: 'top 60%',
              end: 'top 15%',
              scrub: 1,
              once: true,
            },
          })
          gsap.to('#box-icon', {
            opacity: 1,
            scrollTrigger: {
              trigger: parentRef.current,
              start: 'top 60%',
              end: 'top 15%',
              scrub: 1,
              once: true,
            },
          })
          gsap.to('.left-images', {
            transform: 'translateX(-100%)',
            scrollTrigger: {
              trigger: parentRef.current,
              start: 'top 60%',
              end: 'top top',
              scrub: 1,
              once: true,
            },
          })
          gsap.to('.right-images', {
            transform: 'translateX(100%)',
            scrollTrigger: {
              trigger: parentRef.current,
              start: 'top 60%',
              end: 'top top',
              scrub: 1,
              once: true,
            },
          })
        })
      }, 500)
    }, parentRef)
    return () => {
      ctx.revert()
    }
  }, [])
  return (
    <>
      <div className='h-[6.25rem] w-full max-lg:hidden'></div>
      <section
        ref={parentRef}
        id='banner-home'
        className='h-screen relative z-[5] overflow-hidden max-lg:mt-[5.33rem]'
      >
        <div
          id='box-title'
          className={`text-center uppercase text-primary-70 w-full relative z-[5] font-heavitas max-lg:mt-[5.33rem]`}
        >
          <h3
            id='subtitle'
            className={`text-[1rem] leading-normal max-lg:text-[3.2rem] font-extrabold mb-[0.75rem] max-lg:mb-[2.13rem] max-lg:text-white`}
          >
            {section1?.subTitle}
          </h3>
          <h2
            id='title'
            className={`text-[3rem] font-extrabold leading-[1] max-lg:text-[6.4rem] max-lg:leading-[1.17] max-lg:text-white`}
          >
            {section1?.title}
          </h2>
        </div>
        <div className='w-full lg:relative h-fit'>
          <h2
            id='text-vn'
            className='font-tomatoes relative z-10 text-[8.0195rem] font-normal leading-normal tracking-[0.16019rem] text-[#ffd772] text-center mt-[2.19rem] max-lg:text-[6.4rem] max-lg:tracking-[0.064rem] max-lg:text-white max-lg:mt-[3.2rem]'
          >
            {section1?.heading}
          </h2>
          <div
            id='box-slide'
            className='h-[29.8125rem] w-[53rem] max-lg:w-full max-lg:h-[100vh] absolute bottom-[11rem] max-lg:top-0 max-lg:left-0 lg:translate-y-full left-1/2 lg:-translate-x-1/2 lg:rounded-[1rem]'
          >
            <SlideBanner
              section1={section1}
              isMobile={isMobile}
              isActive={isActive}
            />
          </div>
        </div>
        {!isMobile && (
          <>
            <Image
              className='absolute opacity-40 left-images rounded-[1rem] top-[6.25rem] left-[-5.56rem] object-cover w-[15.5625rem] h-[15.5625rem]'
              src={section1?.imageLeftUp?.sourceUrl || '/images/left-up.jpg'}
              alt={section1?.imageLeftUp?.altText || section1?.imageLeftUp?.title}
              width={300}
              height={300}
            />
            <Image
              className='object-cover absolute left-images opacity-40 rounded-[1rem] bottom-0 left-[-5.56rem] w-[23.25rem] h-[23.25rem]'
              src={section1?.imageLeftDown?.sourceUrl || '/images/left-down.jpg'}
              alt={section1?.imageLeftDown?.altText || section1?.imageLeftDown?.title}
              width={400}
              height={400}
            />
            <Image
              className='object-cover right-images absolute opacity-40 rounded-[1rem] top-[6.25rem] right-[-4rem] w-[23.25rem] h-[23.25rem]'
              src={section1?.imageRightUp?.sourceUrl || '/images/right-up.jpg'}
              alt={section1?.imageRightUp?.altText || section1?.imageRightUp?.title}
              width={400}
              height={400}
            />
            <Image
              className='object-cover absolute right-images opacity-40 rounded-[1rem] bottom-0 right-[-4rem] w-[15.5625rem] h-[15.5625rem]'
              src={section1?.imageRightDown?.sourceUrl || '/images/right-down.jpg'}
              alt={section1?.imageRightDown?.altText || section1?.imageRightDown?.title}
              width={300}
              height={300}
            />
          </>
        )}
      </section>
    </>
  )
}
