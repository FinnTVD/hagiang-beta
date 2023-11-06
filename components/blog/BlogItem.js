import img from '@/public/images/left-down.jpg'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import IconCalender from '../icons/IconCalender'

function BlogItem({ data }) {
  return (
    <Link
      href={`/blog/${encodeURIComponent(data?.slug)}`}
      className='blog-item'
    >
      <div className={`w-full font-poppins`}>
        <div className='relative image'>
          <div className='thumb md:rounded-[1.5rem] lg:rounded-[0.5rem] rounded-[2.13333rem]'>
            <Image
              src={data?.featuredImage?.node?.sourceUrl || img}
              width={1000}
              height={1000}
              alt='img'
              className={`lg:!h-[16.3125rem] h-[43.73rem] object-cover md:rounded-[0.5rem] rounded-[2.13333rem] md:!h-[28.5rem]`}
            />
          </div>
        </div>
        <div className='flex items-center md:gap-x-[0.64rem] gap-x-[1.07rem] mt-[2.67rem] md:mt-[1rem] info'>
          <IconCalender className='lg:w-[1.5rem] opacity-60 w-[3.4rem] h-[3.66667rem] md:h-[2.6rem] md:w-[2.5rem] lg:h-[1.6vw]' />
          <span className='lg:text-[0.875rem] opacity-60 text-[2.66667rem] leading-none md:text-[1.8rem]'>
            {moment(data?.date)?.format('DD MMMM YYYY')}
          </span>
        </div>
        <h4 className='lg:text-[1.25rem] text-[3.73333rem] line-clamp-2 font-[700] leading-[1.4] md:mt-[0.78rem] mt-[1.07rem] title md:text-[1.95rem]'>
          {data?.title}
        </h4>
        {data?.excerpt && (
          <div
            className='lg:text-[0.875rem] text-ellipsis line-clamp-2 opacity-60 text-[2.66667rem] font-[500] desc leading-normal md:mt-[0.5rem] mt-[1.07rem] md:text-[1.8rem]'
            dangerouslySetInnerHTML={{ __html: `${data?.excerpt}` }}
          ></div>
        )}
      </div>
    </Link>
  )
}

export default BlogItem
