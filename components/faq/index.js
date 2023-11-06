'use client'
import { useEffect, useState } from 'react'
import Nav from '../global/Nav'
import MenuRes from '../global/MenuRes'
import { useMediaQuery } from 'react-responsive'
import TheTrip from '../homepage/TheTrip'
import Family from '../homepage/Family'
import Banner from '../about-us/Banner'
import FeaturesHeader from '../global/FeaturesHeader'
import NavFixed from '../global/NavFixed'
import MenuDown from '../global/MenuDown'

export default function IndexFaq({ data, dataAboutUs, allTourHG }) {
  const header = data?.header
  const section6 = data?.section6
  const section8 = data?.section8
  const banner = dataAboutUs?.banner
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
    <>
      <header className='relative'>
        <div className='absolute top-0 left-0 w-full'>
          <Nav
            setIsOpen={setIsOpen}
            header={header}
            allTourHG={allTourHG}
          />
        </div>
        <NavFixed
          setIsOpen={setIsOpen}
          header={header}
          allTourHG={allTourHG}
        />
        <FeaturesHeader
          header={header}
          allTourHG={allTourHG}
        />
        <Banner
          bannerData={banner}
          title={'FAQ'}
        />
        {isMobile && (
          <MenuRes
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            header={header}
            allTourHG={allTourHG}
          />
        )}
        {isMobile2 && (
          <MenuDown
            allTourHG={allTourHG}
            header={header}
            setIsOpen={setIsOpen}
          />
        )}
      </header>
      <main>
        <TheTrip
          section8={section8}
          allTourHG={data?.data?.allTourHG}
          isOther={true}
        />
        <Family section6={section6} />
      </main>
    </>
  )
}
