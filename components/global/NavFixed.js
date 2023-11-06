'use client'
import Image from 'next/image'
import Link from 'next/link'
import { PopupNav } from './PopupNav'
import { useEffect, useRef, useState } from 'react'

const listNav = [
  {
    id: 1,
    title: 'HOME',
    href: '/',
  },
  {
    id: 2,
    title: 'ABOUT US',
    href: '/about-us',
  },
  {
    id: 3,
    title: 'TOUR',
    href: '/tour',
  },
  {
    id: 4,
    title: 'DESTINATIONS',
    href: '/destinations',
  },
  {
    id: 5,
    title: 'BLOG',
    href: '/blog',
  },
  {
    id: 6,
    title: 'FAQ',
    href: '/faq',
  },
  {
    id: 7,
    title: 'CONTACT',
    href: '/contact',
  },
  {
    id: 8,
    title: 'VIETNAM CHEERS HOSTEL',
    href: '/viet-nam-cheers-hostel',
  },
]

export default function NavFixed({ setIsOpen, header, allTourHG }) {
  const navRef = useRef(null)
  const [isShow, setIsShow] = useState(false)
  const [prevScrollY, setPrevScrollY] = useState(0)

  useEffect(() => {
    if (typeof window === 'undefined') return
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollY])

  const handleScroll = () => {
    if (typeof window === 'undefined' || !navRef.current) return
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    if (scrollTop >= 1000) {
      if (scrollTop > prevScrollY) {
        //Cuộn xuống
        setIsShow(false)
      } else if (scrollTop < prevScrollY) {
        //Cuộn lên
        setIsShow(true)
      }
    } else {
      setIsShow(false)
    }
    setPrevScrollY(scrollTop)
  }

  return (
    <nav
      ref={navRef}
      className={`${
        isShow ? 'translate-y-0 opacity-100' : ''
      } fixed left-1/2 top-0 -translate-x-1/2 transition-all duration-1000 z-[999] flex justify-center pt-[1.5rem] max-lg:mt-[2.5rem] max-md:pt-[5.8rem] font-heavitas -translate-y-[150%] opacity-0 lg:shadow-navFixed max-md:hidden`}
    >
      <div className='w-[calc(100rem-12rem)] max-lg:w-[calc(100rem-8.54rem)] lg:bg-white rounded-[1rem] flex items-center justify-between h-fit lg:px-[1.88rem]'>
        <Link href={'/'}>
          <Image
            className='w-[4.75rem] h-[4.16rem] max-md:w-[18.13333rem] max-md:h-[15.8976rem] object-cover lg:my-[0.913rem] max-lg:w-[8.75rem] max-lg:h-[8.16rem] max-lg:object-contain'
            src={header?.logo?.sourceUrl || '/images/logo.png'}
            alt={header?.logo?.altText || header?.logo?.title}
            width={80}
            height={70}
            priority
          />
        </Link>
        <div className='text-gray-scale-80 flex py-[1.06rem] max-lg:hidden'>
          {listNav?.map((e) =>
            e?.id === 3 ? (
              <div key={e?.id}>
                <PopupNav allTourHG={allTourHG}>
                  <div className='text-[0.875rem] transition duration-200 group relative font-medium uppercase leading-[1.57] tracking-[0.00219rem] p-[1.25rem]  hover:-translate-y-[0.5rem] hover:text-primary-50 flex items-center gap-x-[0.25rem] nav-tour'>
                    {e?.title}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='13'
                      height='8'
                      viewBox='0 0 13 8'
                      fill='none'
                    >
                      <path
                        d='M6.50329 3.88944L2.88713 0.273436C2.70358 0.0897039 2.47909 -0.0019532 2.21368 -0.00195319C1.9483 -0.00195318 1.72392 0.0897302 1.54039 0.273436L0.982264 0.831382C0.798793 1.01483 0.707031 1.23935 0.707031 1.50465C0.707031 1.76995 0.798793 1.99437 0.982264 2.1781L5.82612 7.02932C6.00967 7.2129 6.23413 7.30469 6.49957 7.30469C6.765 7.30469 6.98928 7.21293 7.17291 7.02932L12.0168 2.17812C12.2003 1.99439 12.2921 1.77 12.2921 1.50467C12.2921 1.23934 12.2003 1.01485 12.0168 0.831408L11.4587 0.273462C11.2753 0.0897298 11.0521 -0.00192783 10.789 -0.00192782C10.5262 -0.00192781 10.3005 0.0897561 10.112 0.273462L6.50329 3.88944Z'
                        className='down'
                        fill='#2E2E2E'
                      />
                    </svg>
                    <div className='w-[0.6rem] transition duration-500 group-hover:bg-primary-50 group-hover:bottom-[0.5rem] h-[0.6rem] bg-gray-300 rounded-full absolute left-1/2 -translate-x-1/2 bottom-0 opacity-0 group-hover:opacity-100'></div>
                  </div>
                </PopupNav>
              </div>
            ) : (
              <div key={e?.id}>
                <Link
                  href={(e?.id === 8 ? header?.vietnamCheersHostel?.url : e?.href) || '/'}
                  className='text-[0.875rem] transition duration-200 group relative font-medium uppercase leading-[1.57] tracking-[0.00219rem] p-[1.25rem] block hover:-translate-y-[0.5rem] hover:text-primary-50'
                >
                  {e?.title}
                  <div className='w-[0.6rem] transition duration-500 group-hover:bg-primary-50 group-hover:bottom-[0.5rem] h-[0.6rem] bg-gray-300 rounded-full absolute left-1/2 -translate-x-1/2 bottom-0 opacity-0 group-hover:opacity-100'></div>
                </Link>
              </div>
            ),
          )}
        </div>
        <div className='flex gap-x-[0.5rem] max-lg:hidden'>
          <Link
            href={header?.facebook?.url || '/'}
            className='bg-primary-70 cursor-pointer rounded-full flex items-center justify-center w-[1.75rem] h-[1.75rem]'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
            >
              <path
                d='M6.13242 14.2214H8.79912V8.88142H11.2018L11.4658 6.22787H8.79912V4.88802C8.79912 4.51983 9.09758 4.22135 9.46578 4.22135H11.4658V1.55469H9.46578C7.62478 1.55469 6.13242 3.04707 6.13242 4.88802V6.22787H4.79908L4.53516 8.88142H6.13242V14.2214Z'
                fill='white'
              />
            </svg>
          </Link>
          <Link
            href={header?.youtube?.url || '/'}
            className='bg-primary-70 cursor-pointer rounded-full flex items-center justify-center w-[1.75rem] h-[1.75rem]'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='14'
              height='10'
              viewBox='0 0 14 10'
              fill='none'
            >
              <path
                d='M7.00075 9.56399H6.98741C6.94608 9.56399 2.81075 9.55599 1.76741 9.27266C1.1937 9.11812 0.745647 8.66979 0.591414 8.09599C0.4038 7.03759 0.313207 5.96419 0.320747 4.88932C0.3159 3.81266 0.408954 2.7378 0.598747 1.67799C0.757221 1.10366 1.2033 0.65329 1.77608 0.489323C2.79075 0.222656 6.81208 0.222656 6.98275 0.222656H6.99675C7.03875 0.222656 11.1847 0.230656 12.2174 0.513989C12.7899 0.669329 13.2371 1.11672 13.3921 1.68932C13.5857 2.75168 13.6765 3.83019 13.6634 4.90999C13.6681 5.98532 13.5748 7.05886 13.3847 8.11732C13.2285 8.69039 12.7802 9.13772 12.2067 9.29266C11.1934 9.56132 7.17141 9.56399 7.00075 9.56399ZM5.66741 2.89266L5.66408 6.89266L9.13875 4.89266L5.66741 2.89266Z'
                fill='white'
              />
            </svg>
          </Link>
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='25'
          viewBox='0 0 24 25'
          fill='none'
          className='lg:hidden max-md:w-[6.4rem] max-md:h-[6.4rem] max-lg:w-[4vw] max-lg:h-[4vw] cursor-pointer'
          onClick={() => setIsOpen(true)}
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M23 4.57031H0.999998C0.447714 4.57031 0 5.01803 0 5.57031C0 6.12259 0.447714 6.57031 0.999998 6.57031H23C23.5523 6.57031 24 6.12259 24 5.57031C24 5.01803 23.5523 4.57031 23 4.57031ZM23 11.5703H1.00001C0.447718 11.5703 0 12.018 0 12.5703C0 13.1226 0.447718 13.5703 1.00001 13.5703H23C23.5523 13.5703 24 13.1226 24 12.5703C24 12.018 23.5523 11.5703 23 11.5703ZM1.00001 18.5703H23C23.5523 18.5703 24 19.018 24 19.5703C24 20.1226 23.5523 20.5703 23 20.5703H1.00001C0.447718 20.5703 0 20.1226 0 19.5703C0 19.018 0.447718 18.5703 1.00001 18.5703Z'
            fill='white'
          />
        </svg>
      </div>
    </nav>
  )
}
