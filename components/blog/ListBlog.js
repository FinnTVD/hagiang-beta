import { Skeleton } from '../ui/skeleton'
import BlogItem from './BlogItem'
import PaginationBlog from './PaginationBlog'
const arr = new Array(12).fill(0)

export default function ListBlog({ children, blogs }) {
  return (
    <section className='relative z-10 max-lg:mt-[10rem]'>
      {children}
      {/* List Blog */}
      <div className='grid lg:grid-cols-4 md:px-[3rem] lg:px-[8.06rem] px-[4.27rem] grid-cols-2 lg:gap-x-[2.5rem] md:gap-y-[3rem] gap-x-[4.27rem] gap-y-[6.4rem] md:mt-[4rem] mt-[7.73rem]'>
        {blogs &&
          blogs?.nodes?.map((item, index) => (
            <BlogItem
              params='blog'
              data={item}
              key={index}
            />
          ))}
        {!blogs &&
          arr?.map((e, index) => (
            <div
              key={index}
              className='blog-item'
            >
              <div className={`w-full font-poppins`}>
                <Skeleton
                  className={'lg:!h-[16.3125rem] h-[43.73rem] md:rounded-[0.5rem] rounded-[2.13333rem] md:!h-[28.5rem]'}
                />
                <div className='mt-[2.67rem] md:mt-[1rem] '>
                  <Skeleton className={'h-[1.5rem]'} />
                </div>
                <div className='md:mt-[0.78rem] mt-[1.07rem]'>
                  <Skeleton className={' h-[3.25rem]'} />
                </div>
                <div className='md:mt-[0.5rem] mt-[1.07rem]'>
                  <Skeleton className=' h-[2rem]' />
                </div>
              </div>
            </div>
          ))}
      </div>

      <PaginationBlog blogs={blogs} />
    </section>
  )
}
