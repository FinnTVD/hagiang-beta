import Image from 'next/image'
import Button from '../global/Button'
import Price from './Price'
import IconHome from '../icons/IconHome'
import IconPeople from '../icons/IconPeople'
import IconBus from '../icons/IconBus'
import Link from 'next/link'
import { PopupBookNow } from '../global/PopupBookNow'

export default function ItemCardTour({ data, allTourHG, className = '' }) {
  return (
    <article
      className={`${className} w-full p-[1rem] max-md:p-[3.2rem] rounded-[1.5rem] max-md:rounded-[4.267rem] bg-white group shadow-itemCardTour font-poppins`}
    >
      <Link
        href={'/' + data?.slug}
        className='w-full h-fit relative block overflow-hidden rounded-[1rem] max-md:rounded-[3.2rem]'
      >
        <Image
          className='object-cover w-full h-[21.125rem] max-lg:h-[27.125rem] max-md:h-[59.2rem] lg:group-hover:scale-110 transition-all duration-500'
          src={data?.featuredImage?.node?.sourceUrl || '/images/item-tour.jpg'}
          alt='item tour'
          width={700}
          height={400}
        />
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-itemCardTour '></div>
        <div className='absolute w-fit h-fit bottom-[1rem] max-md:bottom-[3.47rem] left-[1.44rem] max-md:left-[4.27rem] flex max-md:flex-col max-md:gap-y-[2.13rem] gap-x-[2.5rem]'>
          <Price price={data?.tourHaGiangDetail?.price} />
        </div>
      </Link>
      <Link
        href={'/' + data?.slug}
        className='block w-full h-fit'
      >
        <h2
          className='mt-[1.25rem] max-md:mt-[3.2rem] max-md:mb-[2.13rem] mb-[0.75rem] text-[1.25rem] max-lg:text-[2.5rem] font-semibold leading-[1.2] tracking-[0.00188rem] text-gray-scale-80 uppercase line-clamp-1 max-md:text-[3.733rem] max-md:font-bold max-md:leading-[1.42] max-md:tracking-[0.03733rem]'
          title={data?.title}
        >
          {data?.title}
        </h2>
      </Link>
      <div className='flex items-center'>
        <IconHome
          className={
            'w-[1rem] h-[1rem] max-md:flex-shrink-0 max-lg:w-[2rem] max-lg:h-[2rem] max-md:w-[4.267rem] max-md:h-[4.267rem]'
          }
        />
        <span className='text-[0.875rem] max-lg:text-[1.875rem] whitespace-nowrap font-semibold leading-[1.57] max-md:text-[3.467rem] max-md:font-semibold tracking-[0.00219rem] text-primary-70 ml-[0.37rem] mr-[0.25rem] max-md:ml-[1.6rem] max-md:mr-[1.07rem]'>
          Pick up:
        </span>
        <span className='text-gray-scale-50 text-[0.875rem] max-lg:text-[1.875rem] line-clamp-1 font-normal max-md:text-[3.467rem] max-md:leading-[1.38] max-md:text-[#898989] leading-[1.57] tracking-[0.00219rem]'>
          {data?.tourHaGiangDetail?.header?.pickUpFrom}
        </span>
      </div>
      <div className='flex items-center my-[0.5rem] max-md:my-[2.13rem]'>
        <IconPeople
          className={
            'w-[1rem] h-[1rem] max-md:flex-shrink-0 max-lg:w-[2rem] max-lg:h-[2rem] max-md:w-[4.267rem] max-md:h-[4.267rem]'
          }
        />
        <span className='text-[0.875rem] max-lg:text-[1.875rem] font-semibold leading-[1.57] max-md:text-[3.467rem] max-md:font-semibold tracking-[0.00219rem] text-primary-70 ml-[0.37rem] mr-[0.25rem] max-md:ml-[1.6rem] max-md:mr-[1.07rem]'>
          Group size:
        </span>
        <span className='text-gray-scale-50 text-[0.875rem] max-lg:text-[1.875rem] line-clamp-1 font-normal max-md:text-[3.467rem] max-md:leading-[1.38] max-md:text-[#898989] leading-[1.57] tracking-[0.00219rem]'>
          {data?.tourHaGiangDetail?.header?.groupSize}
        </span>
      </div>
      <div className='flex items-center'>
        <IconBus
          className={
            'w-[1rem] h-[1rem] max-md:flex-shrink-0 max-lg:w-[2rem] max-lg:h-[2rem] max-md:w-[4.267rem] max-md:h-[4.267rem]'
          }
        />
        <span className='text-[0.875rem] max-lg:text-[1.875rem] font-semibold leading-[1.57] max-md:text-[3.467rem] max-md:font-semibold tracking-[0.00219rem] text-primary-70 ml-[0.37rem] mr-[0.25rem] max-md:ml-[1.6rem] max-md:mr-[1.07rem]'>
          Transport:
        </span>
        <span className='text-gray-scale-50 text-[0.875rem] max-lg:text-[1.875rem] line-clamp-1 font-normal max-md:text-[3.467rem] max-md:leading-[1.38] max-md:text-[#898989] leading-[1.57] tracking-[0.00219rem]'>
          {data?.tourHaGiangDetail?.header?.transport}
        </span>
      </div>
      <div className='flex gap-x-[1rem] max-md:gap-x-[3.2rem] mt-[1.25rem] max-md:mt-[3.2rem]'>
        <PopupBookNow
          tour={{
            tour: data,
            countDriver: 1,
            countSelf: 1,
          }}
          allTourHG={allTourHG}
        >
          <div className='max-md:w-[calc(50%-1.6rem)]'>
            <Button
              primary={true}
              content={'book now'}
              maskClass={'w-[8.31831rem]'}
              className={
                'my-[0.87rem] w-[9.4375rem] h-[3rem] max-lg:w-fit max-lg:h-fit max-md:rounded-[2.133rem] max-md:w-full max-md:h-[11.73rem] whitespace-nowrap'
              }
            />
          </div>
        </PopupBookNow>
        <Button
          href={'/' + data?.slug}
          content={'view tour'}
          maskClass={'w-[8.31831rem]'}
          className={
            'my-[0.87rem] w-[9.4375rem] h-[3rem] max-lg:w-fit max-lg:h-fit max-md:rounded-[2.133rem] max-md:w-[calc(50%-1.6rem)] max-md:h-[11.73rem]'
          }
        />
      </div>
    </article>
  )
}
