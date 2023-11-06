'use client'

import moment from 'moment'
import { useMediaQuery } from 'react-responsive'
import MenuRes from '../global/MenuRes'
import Nav from '../global/Nav'
import { useState, useEffect, useRef } from 'react'
import FeaturesHeader from '../global/FeaturesHeader'
import NavFixed from '../global/NavFixed'
import Image from 'next/image'
import MenuDown from '../global/MenuDown'
import TableOfContent from './TableOfContent'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TableContentRes from './TableContentRes'
import ContentBlogDetail from './ContentBlogDetail'

gsap.registerPlugin(ScrollTrigger)
function BlogDetail({ data, dataHome, allTourHG }) {
  const isMobile = useMediaQuery({ query: '(max-width: 1023.9px)' })
  const isMobile2 = useMediaQuery({ query: '(max-width: 767.9px)' })
  const parentRef = useRef(null)
  const [isActive, setIsActive] = useState(false)
  const [isTable, setIsTable] = useState(false)

  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'auto'
    } else {
      document.body.style.overflow = 'hidden'
    }
  }, [isOpen])

  useEffect(() => {
    let ctx = gsap.context(() => {
      setTimeout(() => {
        gsap.matchMedia().add('(min-width: 1024px)', () => {
          ScrollTrigger.create({
            trigger: '#blog-content-detail',
            start: 'top top',
            end: 'bottom center',
            onToggle: (self) => {
              if (self.isActive) {
                setIsActive(true)
              } else {
                setIsActive(false)
              }
            },
          })
        })
        gsap.matchMedia().add('(max-width: 1023px)', () => {
          ScrollTrigger.create({
            trigger: '#blog-content-detail',
            start: 'top top',
            end: 'bottom center',
            onToggle: (self) => {
              if (self.isActive) {
                setIsTable(true)
              } else {
                setIsTable(false)
              }
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
    <div className='relative overflow-x-hidden'>
      <div className='absolute top-0 left-0 w-full'>
        <Nav
          setIsOpen={setIsOpen}
          header={dataHome?.header}
          allTourHG={allTourHG}
        />
      </div>

      <NavFixed
        setIsOpen={setIsOpen}
        header={dataHome?.header}
        allTourHG={allTourHG}
      />

      <FeaturesHeader
        header={dataHome?.header}
        allTourHG={allTourHG}
      />

      <div className='relative pt-[11.25rem] pb-[4rem] max-md:px-0 max-md:pt-[49rem] max-lg:pt-[18rem] max-lg:pb-[12rem]'>
        <Image
          width={1600}
          height={567}
          alt={data?.featuredImage?.node?.altText || data?.featuredImage?.node?.title}
          src={data?.featuredImage?.node?.sourceUrl || '/images/t11.jpg'}
          className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
        />
        <div className='bg-white bg-opacity-[0.85] absolute w-full h-full left-0 top-0'></div>
        <Image
          width={1600}
          height={435}
          alt='about-us-overlay'
          src='/images/abcloud.png'
          className='absolute bottom-0 left-0 w-full'
        />
        <div
          data-aos='fade-up'
          data-aos-anchor-placement='top-bottom'
          className={`max-md:text-[16.5rem] relative text-center font-heavitas text-[8.625rem] uppercase leading-[1]`}
          style={{
            backgroundImage: `url(${data?.featuredImage?.node?.sourceUrl || '/images/t11.jpg'})`,
            backgroundRepeat: 'repeat',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundPosition: 'center',
          }}
        >
          {data?.destination?.nodes[0]?.name || data?.categories?.nodes[0]?.name || 'discovery ha giang'}
        </div>
      </div>

      <div ref={parentRef}>
        <div className='max-md:mx-[4.27rem] mx-[8.12rem] mt-[8rem] font-poppins'>
          <h2 className=' text-[#171717] max-md:text-[5.867rem] text-[4rem] font-semibold capitalize md:leading-[110%] leading-[120%] '>
            {data?.title}
          </h2>
          <div className='flex items-center md:mt-[1.375rem] mt-[2.13rem]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='17'
              viewBox='0 0 16 17'
              fill='none'
            >
              <path
                d='M8 10.167C7.76389 10.167 7.56597 10.0871 7.40625 9.92741C7.24653 9.76768 7.16667 9.56977 7.16667 9.33366C7.16667 9.09755 7.24653 8.89963 7.40625 8.73991C7.56597 8.58018 7.76389 8.50032 8 8.50032C8.23611 8.50032 8.43403 8.58018 8.59375 8.73991C8.75347 8.89963 8.83333 9.09755 8.83333 9.33366C8.83333 9.56977 8.75347 9.76768 8.59375 9.92741C8.43403 10.0871 8.23611 10.167 8 10.167ZM4.66667 10.167C4.43056 10.167 4.23264 10.0871 4.07292 9.92741C3.91319 9.76768 3.83333 9.56977 3.83333 9.33366C3.83333 9.09755 3.91319 8.89963 4.07292 8.73991C4.23264 8.58018 4.43056 8.50032 4.66667 8.50032C4.90278 8.50032 5.10069 8.58018 5.26042 8.73991C5.42014 8.89963 5.5 9.09755 5.5 9.33366C5.5 9.56977 5.42014 9.76768 5.26042 9.92741C5.10069 10.0871 4.90278 10.167 4.66667 10.167ZM11.3333 10.167C11.0972 10.167 10.8993 10.0871 10.7396 9.92741C10.5799 9.76768 10.5 9.56977 10.5 9.33366C10.5 9.09755 10.5799 8.89963 10.7396 8.73991C10.8993 8.58018 11.0972 8.50032 11.3333 8.50032C11.5694 8.50032 11.7674 8.58018 11.9271 8.73991C12.0868 8.89963 12.1667 9.09755 12.1667 9.33366C12.1667 9.56977 12.0868 9.76768 11.9271 9.92741C11.7674 10.0871 11.5694 10.167 11.3333 10.167ZM8 13.5003C7.76389 13.5003 7.56597 13.4205 7.40625 13.2607C7.24653 13.101 7.16667 12.9031 7.16667 12.667C7.16667 12.4309 7.24653 12.233 7.40625 12.0732C7.56597 11.9135 7.76389 11.8337 8 11.8337C8.23611 11.8337 8.43403 11.9135 8.59375 12.0732C8.75347 12.233 8.83333 12.4309 8.83333 12.667C8.83333 12.9031 8.75347 13.101 8.59375 13.2607C8.43403 13.4205 8.23611 13.5003 8 13.5003ZM4.66667 13.5003C4.43056 13.5003 4.23264 13.4205 4.07292 13.2607C3.91319 13.101 3.83333 12.9031 3.83333 12.667C3.83333 12.4309 3.91319 12.233 4.07292 12.0732C4.23264 11.9135 4.43056 11.8337 4.66667 11.8337C4.90278 11.8337 5.10069 11.9135 5.26042 12.0732C5.42014 12.233 5.5 12.4309 5.5 12.667C5.5 12.9031 5.42014 13.101 5.26042 13.2607C5.10069 13.4205 4.90278 13.5003 4.66667 13.5003ZM11.3333 13.5003C11.0972 13.5003 10.8993 13.4205 10.7396 13.2607C10.5799 13.101 10.5 12.9031 10.5 12.667C10.5 12.4309 10.5799 12.233 10.7396 12.0732C10.8993 11.9135 11.0972 11.8337 11.3333 11.8337C11.5694 11.8337 11.7674 11.9135 11.9271 12.0732C12.0868 12.233 12.1667 12.4309 12.1667 12.667C12.1667 12.9031 12.0868 13.101 11.9271 13.2607C11.7674 13.4205 11.5694 13.5003 11.3333 13.5003ZM1.75 16.8337C1.41667 16.8337 1.125 16.7087 0.875 16.4587C0.625 16.2087 0.5 15.917 0.5 15.5837V2.66699C0.5 2.33366 0.625 2.04199 0.875 1.79199C1.125 1.54199 1.41667 1.41699 1.75 1.41699H3.10417V0.166992H4.45833V1.41699H11.5417V0.166992H12.8958V1.41699H14.25C14.5833 1.41699 14.875 1.54199 15.125 1.79199C15.375 2.04199 15.5 2.33366 15.5 2.66699V15.5837C15.5 15.917 15.375 16.2087 15.125 16.4587C14.875 16.7087 14.5833 16.8337 14.25 16.8337H1.75ZM1.75 15.5837H14.25V6.62532H1.75V15.5837Z'
                fill='#171717'
              />
            </svg>
            <span className='md:ml-[0.66rem] ml-[1.067rem] text-[#171717] font-manrope lg:text-[1rem] md:mr-[1.75rem] mr-[4.8rem] text-[3.2rem] leading-[130%] md:text-[1.8rem]'>
              {moment(data?.date)?.format('DD MMMM YYYY')}
            </span>
          </div>
          <div className='w-full md:mt-[1.31rem] mt-[5.067rem] h-[1px] bg-[#44444424]'></div>
        </div>

        <TableContentRes isTable={isTable} />
        <div className='lg:mx-[8.12rem] max-lg:px-[2.5rem] flex gap-x-[1.5rem] max-lg:flex-col-reverse'>
          <ContentBlogDetail data={data} />
          <TableOfContent isActive={isActive} />
        </div>
      </div>

      {isMobile && (
        <MenuRes
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          header={dataHome?.header}
          allTourHG={allTourHG}
        />
      )}
      {isMobile2 && (
        <MenuDown
          allTourHG={allTourHG}
          header={dataHome?.header}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  )
}

export default BlogDetail
