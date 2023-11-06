import Image from 'next/image'
import src from '../../public/images/abcloud.png'

export default function BannerContact({ data }) {
  return (
    <div className='relative px-[6rem] pt-[11.25rem] pb-[4rem] max-md:px-0 max-md:pt-[49rem] max-lg:pt-[18rem] max-lg:pb-[12rem]'>
      <Image
        width={1600}
        height={567}
        alt={data?.backgroundPc?.altText || data?.backgroundPc?.title}
        src={data?.backgroundPc?.sourceUrl || '/images/abtextbanner.png'}
        className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
        priority
      />
      <div className='bg-white bg-opacity-[0.85] absolute w-full h-full left-0 top-0'></div>
      <Image
        alt='about-us-overlay'
        src={src}
        className='absolute bottom-0 left-0 w-full'
        priority
      />
      <div
        className='relative text-center font-heavitas text-[8.625rem] uppercase leading-[1] max-md:text-[16.5rem]'
        style={{
          backgroundImage: `url(${data?.backgroundPc?.sourceUrl || '/images/abtextbanner.png'})`,
          backgroundRepeat: 'repeat',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundPosition: 'center',
        }}
      >
        {data?.title}
      </div>
    </div>
  )
}
