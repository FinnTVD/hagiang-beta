'use client'
import { memo } from 'react'
import FaceBookShare from '../blogDetail/FaceBookShare'
import LinkedInShare from '../blogDetail/LinkedInShare'
import TwitterShare from '../blogDetail/TwitterShare'

function ContentBlogDetail({ data }) {
  return (
    <div
      id='blog-content-detail'
      className='max-md:mx-[4.27rem] flex-1'
    >
      {data?.content && (
        <div
          id='content-detail-blog'
          className='content-detail font-poppins'
          dangerouslySetInnerHTML={{ __html: `${data?.content}` }}
        ></div>
      )}
      <div className='w-full md:mt-[1.31rem] mt-[5.067rem] md:mb-[1.62rem] mb-[3.73rem] h-[1px] bg-[#44444424]'></div>
      <div className='flex items-center justify-end'>
        <span className='text-[#171717]  lg:text-[0.875rem] text-[3.73rem] font-bold md:leading-[1.25] leading-[1.42] uppercase md:mr-[0.81rem] mr-[3.47rem] md:text-[1.8rem]'>
          share on it:
        </span>
        <div className='flex items-center'>
          <TwitterShare />
          <FaceBookShare />
          <LinkedInShare />
        </div>
      </div>
    </div>
  )
}
export default memo(ContentBlogDetail)
