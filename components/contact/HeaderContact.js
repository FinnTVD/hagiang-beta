'use client'

import { useEffect, useState } from 'react'
import Nav from '../global/Nav'
import FeaturesHeader from '../global/FeaturesHeader'
import { useMediaQuery } from 'react-responsive'
import MenuRes from '../global/MenuRes'
import NavFixed from '../global/NavFixed'
import MenuDown from '../global/MenuDown'
import BannerContact from './BannerContact'

export default function HeaderContact({ dataHome, data }) {
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
    <header className='relative'>
      <div className='absolute top-0 left-0 w-full'>
        <Nav
          setIsOpen={setIsOpen}
          header={dataHome?.data?.page?.homeHG?.header}
          allTourHG={dataHome?.data?.allTourHG}
        />
      </div>
      <NavFixed
        setIsOpen={setIsOpen}
        header={dataHome?.data?.page?.homeHG?.header}
        allTourHG={dataHome?.data?.allTourHG}
      />
      <FeaturesHeader
        header={dataHome?.data?.page?.homeHG?.header}
        allTourHG={dataHome?.data?.allTourHG}
      />
      <BannerContact data={data} />
      {isMobile && (
        <MenuRes
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          header={dataHome?.data?.page?.homeHG?.header}
          allTourHG={dataHome?.data?.allTourHG}
        />
      )}
      {isMobile2 && (
        <MenuDown
          allTourHG={dataHome?.data?.allTourHG}
          header={dataHome?.data?.page?.homeHG?.header}
          setIsOpen={setIsOpen}
        />
      )}
    </header>
  )
}
