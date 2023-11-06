'use client'
import { useEffect, useState } from 'react'
import IconEmail from '../icons/IconEmail'
import IconMenuV2 from '../icons/IconMenuV2'
import IconPhoneV2 from '../icons/IconPhoneV2'
import ItemMenu from './ItemMenu'
import { PopupBookNow } from './PopupBookNow'
import IconMotorV2 from '../icons/IconMotorV2'
import IconHomeV2 from '../icons/IconHomeV2.'

export default function MenuDown({ allTourHG, header, setIsOpen, isHome }) {
  const [scrollY, setScrollY] = useState(0)
  const [heightBanner, setHeightBanner] = useState(500)
  const [indexActive, setIndexActive] = useState(isHome ? 1 : 0)

  useEffect(() => {
    if (typeof window === 'undefined') return
    // Define a function to handle the scroll event
    const heightBanner = document.querySelector('#banner-home')
    if (!heightBanner) return
    setHeightBanner(heightBanner?.clientHeight + 350)
    const handleScroll = () => {
      // Update the state with the current scroll position
      setScrollY(window.scrollY)
    }
    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div
      className={`${
        isHome ? (scrollY >= heightBanner ? 'flex' : 'hidden') : 'flex'
      } fixed bottom-0 left-0 bg-white w-full h-fit px-[4.27rem] py-[3.2rem] flex justify-between z-[999] shadow-menuDown`}
    >
      <ItemMenu
        href='/'
        title={'Home'}
        isActive={indexActive === 1}
        onClick={() => setIndexActive(1)}
      >
        <IconHomeV2
          isActive={indexActive === 1}
          className='w-[4.733rem] h-[4.733rem]'
        />
      </ItemMenu>
      <ItemMenu
        isActive={indexActive === 2}
        href='/#great-trips-mb'
        title={'Tour'}
        onClick={() => setIndexActive(2)}
      >
        <IconMotorV2
          isActive={indexActive === 2}
          className='w-[4.733rem] h-[4.733rem]'
        />
      </ItemMenu>
      <ItemMenu
        href={`https://api.whatsapp.com/send?phone=${header?.phoneNumber}`}
        target='_blank'
        title={'WhatsApp'}
        isActive={indexActive === 3}
        onClick={() => setIndexActive(3)}
      >
        <IconPhoneV2
          isActive={indexActive === 3}
          className='w-[4.733rem] h-[4.733rem]'
        />
      </ItemMenu>
      <PopupBookNow allTourHG={allTourHG}>
        <ItemMenu
          isActive={indexActive === 4}
          title={'Book Now'}
          onClick={() => setIndexActive(4)}
        >
          <IconEmail
            isActive={indexActive === 4}
            className='w-[4.733rem] h-[4.733rem]'
          />
        </ItemMenu>
      </PopupBookNow>
      <ItemMenu
        onClick={() => {
          setIsOpen((prev) => !prev)
          setIndexActive(5)
        }}
        title={'Menu'}
        isActive={indexActive === 5}
      >
        <IconMenuV2
          isActive={indexActive === 5}
          className='w-[4.733rem] h-[4.733rem]'
        />
      </ItemMenu>
    </div>
  )
}
