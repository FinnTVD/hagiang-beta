'use client'

import Image from 'next/image'
import bgBlog from '../../public/images/bg-blog.jpg'
import HeaderBlog from './HeaderBlog'
import ListBlog from './ListBlog'
import FilterCategory from './FilterCategory'

export default function IndexBlog({ categories, blogs, dataHome, allTourHG }) {
  return (
    <>
      <HeaderBlog
        dataHome={dataHome}
        allTourHG={allTourHG}
      />
      <main className='relative'>
        <div className='absolute inset-0 max-md:hidden'>
          <Image
            src={bgBlog}
            className='w-full h-full'
            alt='bg-blog'
          />
        </div>
        <ListBlog blogs={blogs}>
          <FilterCategory categories={categories} />
        </ListBlog>
      </main>
    </>
  )
}
