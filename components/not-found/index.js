'use client'
import Image from 'next/image'
import Button from '../global/Button'
import { useEffect } from 'react'

export default function IndexNotFound() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    const footer = document.getElementById('footer')
    if (footer) {
      footer.style.display = 'none'
    }
  }, [])
  return (
    <section className='relative h-screen  w-full flex justify-center items-center overflow-hidden flex-col'>
      <Image
        width={1600}
        height={567}
        alt='about-us-banner'
        src={'/images/t11.jpg'}
        className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
      ></Image>
      <div className='bg-white bg-opacity-[0.85] absolute w-full h-full left-0 top-0'></div>
      <Image
        width={1600}
        height={435}
        alt='about-us-overlay'
        src='/images/abcloud.png'
        className='absolute bottom-0 left-0 w-full'
      ></Image>
      <div
        className={`max-md:text-[32.5rem] relative text-center font-heavitas max-lg:text-[24.625rem] text-[20.625rem] uppercase leading-[1]`}
        style={{
          backgroundImage: `url('/images/t11.jpg')`,
          backgroundRepeat: 'repeat',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundPosition: 'center',
        }}
      >
        404
      </div>
      <Button
        href={'/'}
        content='Back Home'
        classContent={'lg:text-[1.5rem] md:text-[3rem]'}
      />
    </section>
  )
}
