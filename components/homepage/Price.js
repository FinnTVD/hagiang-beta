import { basicBike, bigBike } from '@/lib/utils'

export default function Price({ price }) {
  return (
    <>
      <div className='flex items-center gap-x-[0.5rem] max-md:gap-x-[2.13rem]'>
        <span className='text-[2.125rem] max-lg:text-[3.125rem] font-bold leading-[1.18] tracking-[0.00531rem] text-white  max-md:text-[5.33rem] max-md:leading-[1.2] max-md:tracking-[0.008rem]'>
          ${price?.selfDriving}
        </span>
        <div className='flex flex-col w-fit'>
          <span className='text-[0.875rem] max-lg:text-[1.5rem] font-bold leading-[1.428] tracking-[0.00875rem] uppercase text-gray-scale-5 max-md:text-[3.467rem] max-md:leading-[1.38]'>
            {basicBike}
          </span>
          <div className='w-full mt-[0.25rem] max-md:mt-[1.07rem] border-t border-white border-solid opacity-50 max-md:opacity-80'></div>
        </div>
      </div>
      <div className='flex items-center gap-x-[0.5rem] max-md:gap-x-[2.13rem]'>
        <span className='text-[2.125rem] max-lg:text-[3.125rem] font-bold leading-[1.18] tracking-[0.00531rem] text-white  max-md:text-[5.33rem] max-md:leading-[1.2] max-md:tracking-[0.008rem]'>
          ${price?.localDriver}
        </span>
        <div className='flex flex-col w-fit'>
          <span className='text-[0.875rem] max-lg:text-[1.5rem] font-bold leading-[1.428] tracking-[0.00875rem] uppercase text-gray-scale-5 max-md:text-[3.467rem] max-md:leading-[1.38]'>
            {bigBike}
          </span>
          <div className='w-full mt-[0.25rem] max-md:mt-[1.07rem] border-t border-white border-solid opacity-50 max-md:opacity-80'></div>
        </div>
      </div>
    </>
  )
}
