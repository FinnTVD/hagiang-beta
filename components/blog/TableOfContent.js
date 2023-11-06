'use client'

import Link from 'next/link'
import { useLayoutEffect, useState } from 'react'

export default function TableOfContent({ isActive }) {
  const [tableOfContents, setTableOfContents] = useState([])
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
    <div
      data-aos='fade-left'
      data-aos-delay='100'
      className='max-md:mx-[4.27rem] w-[20.75rem] h-fit lg:mt-[1.5rem] md:mt-[2.5rem] max-lg:w-full max-md:w-fit max-md:mt-[4.27rem]'
    >
      <div
        style={{
          boxShadow: '6px 6px 32px 0px rgba(0, 0, 0, 0.04), -16px -16px 32px 0px rgba(0, 0, 0, 0.04)',
        }}
        className={`${
          isActive ? 'fixed top-[1.5rem] right-[8.12rem]' : ''
        } w-[20.75rem] rounded-[0.75rem] max-md:rounded-[2.75rem] max-md:py-[4.5rem] max-md:px-[2.25rem] max-lg:py-[2.5rem] max-lg:px-[2.25rem] px-[1.25rem] py-[1.5rem] h-fit font-poppins max-lg:w-full max-md:w-fit`}
      >
        <h2 className='text-[1rem] text-gray-scale-80 font-heavitas max-lg:text-[3rem] leading-[1.37] font-bold tracking-[0.0025rem] max-md:text-[4.5rem] max-lg:font-semibold max-lg:capitalize'>
          Table of contents
        </h2>
        <div className='border-t border-solid border-[#D9D9D966] lg:my-[0.75rem] md:my-[1.25rem] max-md:mb-[4.27rem] max-md:mt-[2.27rem]'></div>
        <ul className='flex flex-col gap-y-[0.75rem] max-md:gap-y-[2.13rem] max-lg:gap-y-[1.25rem] max-md:px-[2.13rem]'>
          {tableOfContents
            ?.filter((e) => e?.title)
            ?.map((item, index) => (
              <li
                key={item.slug}
                data-id={item.level}
                className={`${index === idx ? 'text-primary-70' : 'text-gray-scale-50'}`}
                onClick={() => setIdx(index)}
              >
                <Link
                  className={`${
                    index === idx ? 'text-primary-70' : 'text-gray-scale-50'
                  } text-[0.875rem] font-semibold leading-[1.42] max-lg:text-[2rem] tracking-[0.00875rem] font-poppins max-md:text-[3.733rem]`}
                  href={`#${item.slug}`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}
