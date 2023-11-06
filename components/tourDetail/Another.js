import Image from 'next/image'
import SubTitle from '../global/SubTitle'
import ItemCardTour from '../homepage/ItemCardTour'

export default function Another({ allTourHG, slug, data }) {
  return (
    <section className='mt-[6.25rem] relative h-[47.4rem] max-md:h-fit flex flex-col items-center pt-[5rem] max-md:pt-[16.5rem] mb-[6.5rem]'>
      <SubTitle
        subTitle={data?.subtitle || 'Another'}
        title={data?.title || 'Great Trips'}
        boxClass={'flex flex-col text-center'}
      />
      <div
        data-aos='fade-up'
        data-aos-anchor-placement='top-bottom'
        className='flex justify-center mt-[2.625rem] relative z-[1] gap-x-[1.5rem] max-md:mt-[6rem] max-md:px-[4.27rem]'
      >
        {allTourHG?.nodes
          ?.filter((e) => e?.slug !== slug)
          ?.map((e, index) => (
            <ItemCardTour
              className='max-lg:w-[50rem] max-md:w-full'
              data={e}
              allTourHG={allTourHG}
              key={index}
            />
          ))}
      </div>
      <Image
        className='object-cover absolute top-0 left-0 w-full h-[38rem] z-0 max-md:h-[90rem]'
        src={'/images/anTrip.png'}
        alt='great trips'
        width={1600}
        height={800}
        quality={100}
      />
    </section>
  )
}
