'use client'
import { useState } from 'react'
import SubTitle from '../global/SubTitle'
import SlideGallery from './SlideGallery'
import PopupGallery from './PopupGallery'
import Image from 'next/image'

const handleArrayImg = (arr) => {
  if (!Array.isArray(arr)) return null
  const a = []
  for (let index = 0; index < arr.length; index++) {
    if (Array.isArray(arr[index]?.slidesImage)) {
      a.push(...arr[index]?.slidesImage)
    }
  }
  return a
}

export default function TheGallery({ section4, allTourHG }) {
  const [isOpen, setIsOpen] = useState(false)
  const [indexTab, setIndexTab] = useState(0)
  const listImgPreview = handleArrayImg(section4?.listGallery)
  return (
    <section className='lg:w-[87.5rem] max-lg:w-[95vw] max-md:w-full mt-[6.25rem] max-md:mt-[9rem] mx-auto relative'>
      <div className='relative z-10 bg-white'>
        <SubTitle
          subTitle={section4?.subtitle}
          title={section4?.title}
          boxClass='max-md:px-[4.27rem]'
        />
        <div data-aos='zoom-in-up'>
          <SlideGallery
            section4={section4}
            setIndexTab={setIndexTab}
            setIsOpen={setIsOpen}
          />
        </div>
        <PopupGallery
          section4={section4}
          indexTab={indexTab}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          setIndexTab={setIndexTab}
          allTourHG={allTourHG}
        />
      </div>
      <div
        className={`lg:h-[29.08975rem] md:h-[34rem] max-md:w-[91rem] w-[43rem] max-2xl:h-[26rem] max-md:h-[121rem] absolute top-[1rem] left-[1rem] -z-20 opacity-0`}
      >
        {Array.isArray(listImgPreview) &&
          listImgPreview?.map((e, index) => (
            <Image
              key={index}
              className='object-cover w-full h-full'
              src={e?.sourceUrl || '/images/gallery.jpg'}
              alt={e?.altText || e?.title}
              fill
              sizes='100vw'
            />
          ))}
      </div>
    </section>
  )
}
