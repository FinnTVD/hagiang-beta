import BlogItem from './BlogItem'
import SubTitle from '../global/SubTitle'
import Button from '../global/Button'

function OtherArticle({ dataOtherPost, slug, category }) {
  return (
    <section className='w-full px-[6.25rem] mt-[6.25rem] relative z-30'>
      <SubTitle
        title={'Tips and Reviews'}
        subTitleClass={'hidden'}
      />
      <div className='grid lg:grid-cols-4 grid-cols-2 md:gap-x-[2.5rem] md:gap-y-[3rem] gap-x-[4.27rem] gap-y-[6.4rem] md:mt-[1.5rem] mt-[4.27rem] font-poppins'>
        {dataOtherPost &&
          dataOtherPost
            ?.filter((e) => e?.slug !== slug)
            ?.slice(0, 4)
            ?.map((item, index) => (
              <BlogItem
                params='blog'
                data={item}
                key={index}
              />
            ))}
      </div>

      <div className='flex justify-center md:mt-[1.5rem] mt-[4.27rem]'>
        <Button
          href={category === 'blog' ? '/blog' : '/destinations'}
          content={`view all ${category === 'blog' ? 'blogs' : 'destinations'}`}
          className={'my-[0.87rem] w-fit h-[3rem] max-md:rounded-[2.133rem] max-md:flex-1 max-md:h-[11.73rem] max-lg:h-[4.5rem]'}
        />
      </div>
    </section>
  )
}

export default OtherArticle
