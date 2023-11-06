'use client'
import Image from 'next/image'
import Nav from '../global/Nav'
import FeaturesHeader from '../global/FeaturesHeader'
import ContentHeaderDetail from './ContentHeaderDetail'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import MenuRes from '../global/MenuRes'
import NavFixed from '../global/NavFixed'
import MenuDown from '../global/MenuDown'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function HeaderDetail({ data, allTourHG, slug }) {
  const param = useParams()
  const isMobile = useMediaQuery({ query: '(max-width: 1023.9px)' })
  const isMobile2 = useMediaQuery({ query: '(max-width: 767.9px)' })
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'auto'
    } else {
      document.body.style.overflow = 'hidden'
    }
  }, [isOpen])
  return (
    <header
      style={{
        background:
          ' linear-gradient(245deg, rgba(204,237,199,0.8155637254901961) 0%, rgba(191,224,186,1) 0%, rgba(75,114,69,1) 77%, rgba(58,98,51,1) 100%)',
      }}
      className='relative w-full h-[85vh] max-md:h-[70vh]'
    >
      <Nav
        header={data?.data?.page?.homeHG?.header}
        setIsOpen={setIsOpen}
        allTourHG={allTourHG}
      />
      <NavFixed
        setIsOpen={setIsOpen}
        header={data?.data?.page?.homeHG?.header}
        allTourHG={allTourHG}
      />
      <Image
        className='z-0 object-cover bg-header'
        src={data?.data?.tourHG?.featuredImage?.node?.sourceUrl || '/images/header-detail.jpg'}
        alt={data?.data?.tourHG?.featuredImage?.node?.altText || data?.data?.tourHG?.featuredImage?.node?.title}
        fill
        sizes='100vw'
        priority
      />
      <div className='absolute top-0 left-0 z-0 w-full h-full bg-gradient-header-detail bg-overlay'></div>
      <ContentHeaderDetail
        data={data?.data?.tourHG?.tourHaGiangDetail?.header}
        slug={slug}
      />
      <FeaturesHeader
        allTourHG={allTourHG}
        header={data?.data?.page?.homeHG?.header}
      />
      <div className='flex gap-x-[1rem] absolute bottom-0 translate-y-1/2 lg:right-[6.27rem] max-lg:gap-x-[3rem] max-lg:left-[5vw] max-md:left-[4.27rem] font-poppins'>
        <Link
          href={`/${param.slug}#bookingId`}
          className='w-[11.88rem] h-[12.12rem] max-lg:w-[20rem] max-lg:h-[21rem] max-md:w-[30.69rem] max-md:h-[30.92rem] relative flex items-center justify-center select-none'
        >
          <Image
            className='z-0 object-cover animate-spin duration-7000'
            src={'/images/circle-orange.png'}
            alt='circle currency'
            fill
            sizes='100vw'
          />
          <div className='relative z-[1] flex flex-col justify-center items-center'>
            <span className='text-[0.875rem] text-white font-semibold leading-[1.42] max-lg:text-[1.5rem] tracking-[0.00875rem] max-md:text-[2.67rem] max-md:leading-normal uppercase text-center'>
              easy rider <br /> basic bike
            </span>
            <span className='text-[3rem] font-bold leading-[1.08] max-lg:text-[5rem] text-white max-md:text-[9.067rem] max-md:leading-[1.17] max-md:tracking-[0.02267rem]'>
              ${data?.data?.tourHG?.tourHaGiangDetail?.price?.selfDriving}
            </span>
          </div>
        </Link>
        <Link
          href={`/${param.slug}#bookingId`}
          className='w-[11.88rem] h-[12.12rem] max-lg:w-[20rem] max-lg:h-[21rem] max-md:w-[30.69rem] max-md:h-[30.92rem] relative flex items-center justify-center select-none'
        >
          <Image
            className='z-0 object-cover animate-spin duration-7000'
            src={'/images/circle-orange.png'}
            alt='circle currency'
            fill
            sizes='100vw'
          />
          <div className='relative z-[1] flex flex-col justify-center items-center'>
            <span className='text-[0.875rem] text-white font-semibold leading-[1.42] max-lg:text-[1.5rem] tracking-[0.00875rem] max-md:text-[2.67rem] max-md:leading-normal uppercase text-center'>
              easy rider <br /> big bike
            </span>
            <span className='text-[3rem] font-bold leading-[1.08] max-lg:text-[5rem] text-white max-md:text-[9.067rem] max-md:leading-[1.17] max-md:tracking-[0.02267rem]'>
              ${data?.data?.tourHG?.tourHaGiangDetail?.price?.localDriver}
            </span>
          </div>
        </Link>
      </div>
      {isMobile && (
        <MenuRes
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          header={data?.data?.page?.homeHG?.header}
          allTourHG={allTourHG}
        />
      )}
      {isMobile2 && (
        <MenuDown
          allTourHG={allTourHG}
          header={data?.data?.page?.homeHG?.header}
          setIsOpen={setIsOpen}
        />
      )}
    </header>
  )
}
