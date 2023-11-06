import Image from 'next/image'
import SubTitle from '../global/SubTitle'
import SlideTravelers from './SlideTravelers'
import Link from 'next/link'

export default function Travelers({ section5 }) {
  return (
    <section className='w-full relative h-fit mt-[6.25rem] lg:px-[12.75rem] max-md:mt-[16rem]'>
      {/* <Image
        className='z-0 object-cover'
        src={'/images/bg-traveller.png'}
        fill
        sizes='100vw'
      /> */}
      <div className='w-full h-[8rem] bg-gradient-travelers absolute top-0 left-0 z-[1]'></div>
      <SubTitle
        subTitle={section5?.subtitle}
        title={section5?.title}
        titleClass={'text-center'}
        subTitleClass={'text-center'}
      />
      <SlideTravelers section5={section5} />
      <div className=' flex flex-col items-center relative z-[5] gap-y-[0.5rem] max-md:gap-y-[2.13rem] mt-[1.88rem] max-md:mt-[5.33rem]'>
        <span className=' text-[0.875rem] max-lg:text-[1.875rem] font-normal leading-[1.57] tracking-[0.00219rem] max-md:text-[3.733rem] max-md:font-semibold max-md:tracking-[0.00933rem] font-poppins'>
          View us on:
        </span>
        <div className='flex gap-x-[0.75rem] max-lg:gap-x-[2.5rem] max-md:gap-x-[3.2rem]'>
          {section5?.listPartner?.map((e, index) => (
            <Link
              href={e?.linkPartner?.url || '/'}
              key={index}
              className='w-[9.25rem] max-lg:w-[16.25rem] max-lg:h-[6rem] shadow-btnTravel h-[3rem] rounded-[0.5rem] max-md:rounded-[2.13rem] max-md:w-[39.467rem] max-md:h-[12.8rem] bg-white flex justify-center items-center'
            >
              <Image
                className='object-contain w-[7rem] h-[1.5rem] max-lg:w-[11rem] max-lg:h-[3.5rem] max-md:w-[29.867rem] max-md:h-[6.4rem]'
                src={e?.button?.sourceUrl || '/images/tri.svg'}
                alt={e?.button?.altText || e?.button?.title}
                width={120}
                height={40}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className='w-full h-[14rem] bg-gradient-travelers2 absolute bottom-0 left-0 z-[1]'></div>
    </section>
  )
}
