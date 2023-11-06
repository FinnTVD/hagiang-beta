'use client'

import Link from 'next/link'
import { useLayoutEffect, useState } from 'react'
import IconMenuV2 from '../icons/IconMenuV2'

export default function TableContentRes({ isTable }) {
  const [tableOfContents, setTableOfContents] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [idx, setIdx] = useState(0)

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return
    const all = document.querySelector('#content-detail-blog')
    const headings = all.querySelectorAll('h2')
    const arr = []

    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1))
      const title = heading.innerText
      const slug = 'tieu-de-' + (index + 1)

      heading.id = slug

      arr.push({ level, title, slug })
    })

    setTableOfContents(arr)
  }, [])
  return (
    <>
      <div
        id='icon-table-content'
        onClick={() => setIsOpen(true)}
        className={`${
          isTable ? 'flex' : 'hidden'
        } fixed right-[4.27rem] z-[99999] lg:hidden top-1/2 -translate-y-1/2 border border-solid border-primary-70 rounded-[2.13rem] w-[10rem] h-[10rem] justify-center items-center`}
      >
        <IconMenuV2
          isActive={true}
          className={'w-[5.5rem] h-[5.5rem]'}
        />
      </div>
      <div
        style={{
          boxShadow: '6px 6px 32px 0px rgba(0, 0, 0, 0.04), -16px -16px 32px 0px rgba(0, 0, 0, 0.04)',
        }}
        className={`${
          isOpen ? 'translate-x-0' : 'translate-x-[110%]'
        } fixed top-0 right-0 w-[70vw] h-[100vh] bg-white px-[4.27rem] py-[5.33rem] z-[9999999] transition-all duration-500`}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='2.5'
          stroke='currentColor'
          onClick={() => setIsOpen(false)}
          className='w-[11.27rem] h-[11.27rem] absolute top-0 right-0 z-50 active:scale-90 p-[2.13rem] cursor-pointer '
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
        <h2 className='text-[1rem] text-gray-scale-80 font-heavitas max-lg:text-[3rem] leading-[1.37] font-bold tracking-[0.0025rem] max-md:text-[4.5rem] max-lg:font-semibold max-lg:capitalize'>
          Table of contents
        </h2>
        <div className='border-t border-solid border-gray-scale-80 lg:my-[0.75rem] md:my-[2.25rem] max-md:mb-[4.27rem] max-md:mt-[2.27rem]'></div>
        <ul className='flex flex-col gap-y-[0.75rem] max-md:gap-y-[2.13rem] max-lg:gap-y-[2.25rem] max-md:px-[2.13rem]'>
          {tableOfContents
            ?.filter((e) => e?.title)
            ?.map((item, index) => (
              <li
                key={item.slug}
                data-id={item.level}
                className={`text-gray-scale-80`}
                onClick={() => setIdx(index)}
              >
                <Link
                  className={`text-gray-scale-80 text-[0.875rem] font-semibold leading-[1.42] max-lg:text-[2rem] tracking-[0.00875rem] font-poppins max-md:text-[3.733rem]`}
                  href={`#${item.slug}`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}
