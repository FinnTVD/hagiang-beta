'use client'
import IconMarker from '../icons/IconMarker'
import { useState } from 'react'
import { ComboboxV2 } from '../ui/ComboboxV2'
import { PopupBookNow } from '../global/PopupBookNow'
import IconPeople from '../icons/IconPeople'
import { basicBike, bigBike } from '@/lib/utils'

export default function BookNowHeader({ allTourHG }) {
  const [countSelf, setCountSelf] = useState(1)
  const [countDriver, setCountDriver] = useState(1)
  const [tour, setTour] = useState([...allTourHG?.nodes]?.reverse()[0])
  return (
    <div className='bg-white w-[71.75rem] max-md:w-[91.467rem] max-lg:w-[80vw] max-lg:rounded-[3.2rem] items-center rounded-[0.75rem] absolute bottom-[2.63rem] left-1/2 -translate-x-1/2 lg:flex lg:justify-between py-[1.25rem] px-[1.88rem] max-lg:p-[2.27rem] max-md:p-[4.27rem] max-lg:bottom-0 max-lg:translate-y-1/2 max-lg:shadow-boxTour font-poppins'>
      <div className='max-md:w-full'>
        <span className='text-[0.875rem] block mb-[0.5rem] max-lg:mb-[2.13rem] text-gray-scale-50 font-normal leading-[1.43] tracking-[0.00875rem] max-md:text-[3.2rem] max-lg:text-[2.2rem] max-lg:font-medium max-lg:leading-[1.33rem]'>
          TOUR
        </span>
        <div className='flex items-center'>
          <IconMarker className='w-[2rem] h-[2rem] max-lg:w-[4.33rem] max-lg:h-[4.33rem] max-md:w-[5.33rem] max-md:h-[5.33rem] max-lg:mr-[2.06rem]' />

          <ComboboxV2
            setTour={setTour}
            allTourHG={allTourHG}
          />
        </div>
      </div>
      <div className='max-md:mt-[4.27rem] lg:hidden max-lg:w-full border-t-[0.5px] border-solid border-[#b9b9b9] max-lg:mb-[6.4rem]'></div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='1'
        height='36'
        viewBox='0 0 1 36'
        fill='none'
        className='h-[2.125rem] max-lg:hidden'
      >
        <path
          d='M0.5 1L0.499999 35'
          stroke='#D9D9D9'
          strokeLinecap='round'
        />
      </svg>
      <div className='max-lg:w-1/2 max-lg:pr-[3.2rem] max-lg:inline-flex max-lg:flex-col'>
        <span className='text-[0.875rem] block mb-[0.5rem] text-gray-scale-50 font-normal leading-[1.43] tracking-[0.00875rem] max-md:text-[3.2rem] max-lg:text-[2.2rem] max-lg:font-medium max-lg:leading-[1.33rem] whitespace-nowrap max-lg:mb-[2.13rem] uppercase'>
          {basicBike}
        </span>
        <div className='flex items-center'>
          <IconPeople className='w-[2rem] h-[2rem] max-lg:w-[4.33rem] max-lg:h-[4.33rem] max-md:w-[5.33rem] max-md:h-[5.33rem] max-lg:mr-[2.13rem]' />
          <div className='flex items-center ml-[0.5rem] justify-end max-lg:w-full'>
            <span className='text-gray-scale-80 text-[1rem] font-bold leading-normal tracking-[0.005rem] max-lg:text-[2.2rem] max-md:text-[3.733rem] max-lg:font-semibold max-lg:leading-[1.57rem]'>
              {countSelf} pax
            </span>
            <div className=' flex gap-x-[0.75rem] ml-[1rem] max-lg:ml-auto max-lg:gap-x-[3.13rem]'>
              <button
                onClick={() => {
                  if (countSelf === 0) return
                  setCountSelf(countSelf - 1)
                }}
                className='w-[2.25rem] h-[2.25rem] max-md:w-[8.25rem] max-lg:h-[6.25rem] max-lg:w-[6.25rem] max-md:h-[8.25rem] max-lg:text-[4.5rem] rounded-full select-none text-[1.5rem] active:scale-90 shadow-btn bg-white flex items-center justify-center'
              >
                -
              </button>
              <button
                onClick={() => setCountSelf(countSelf + 1)}
                className='w-[2.25rem] h-[2.25rem] max-md:w-[8.25rem] max-lg:h-[6.25rem] max-lg:w-[6.25rem] max-md:h-[8.25rem] max-lg:text-[4.5rem] rounded-full select-none text-[1.5rem] active:scale-90 shadow-btn bg-white flex items-center justify-center'
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='1'
        height='36'
        viewBox='0 0 1 36'
        fill='none'
        className='h-[2.125rem] max-lg:hidden'
      >
        <path
          d='M0.5 1L0.499999 35'
          stroke='#D9D9D9'
          strokeLinecap='round'
        />
      </svg>
      <div className='max-lg:w-1/2 max-lg:pl-[3.2rem] max-lg:inline-flex max-lg:flex-col'>
        <span className='text-[0.875rem] block mb-[0.5rem] text-gray-scale-50 font-normal leading-[1.43] tracking-[0.00875rem] max-md:text-[3.2rem] max-lg:text-[2.2rem] max-lg:font-medium max-lg:leading-[1.33rem] whitespace-nowrap max-lg:mb-[2.13rem] uppercase'>
          {bigBike}
        </span>
        <div className='flex items-center'>
          <IconPeople className='w-[2rem] h-[2rem] max-lg:w-[4.33rem] max-lg:h-[4.33rem] max-md:w-[5.33rem] max-md:h-[5.33rem] max-lg:mr-[2.13rem]' />
          {/* <ComboboxDemo frameworks={frameworks2} /> */}
          <div className='flex items-center ml-[0.5rem] justify-end max-lg:w-full'>
            <span className='text-gray-scale-80 text-[1rem] font-bold leading-normal tracking-[0.005rem] max-md:text-[3.733rem] max-lg:font-semibold max-lg:leading-[1.57rem] max-lg:text-[2.2rem]'>
              {countDriver} pax
            </span>
            <div className=' flex gap-x-[0.75rem] ml-[1rem] max-lg:ml-auto max-lg:gap-x-[3.13rem]'>
              <button
                onClick={() => {
                  if (countDriver === 0) return
                  setCountDriver(countDriver - 1)
                }}
                className='w-[2.25rem] h-[2.25rem] max-md:w-[8.25rem] max-lg:h-[6.25rem] max-lg:w-[6.25rem] max-md:h-[8.25rem] max-lg:text-[4.5rem] rounded-full select-none text-[1.5rem] active:scale-90 shadow-btn bg-white flex items-center justify-center'
              >
                -
              </button>
              <button
                onClick={() => setCountDriver(countDriver + 1)}
                className='w-[2.25rem] h-[2.25rem] max-md:w-[8.25rem] max-lg:h-[6.25rem] max-lg:w-[6.25rem] max-md:h-[8.25rem] max-lg:text-[4.5rem] rounded-full select-none text-[1.5rem] active:scale-90 shadow-btn bg-white flex items-center justify-center'
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <PopupBookNow
        tour={{
          tour,
          countDriver,
          countSelf,
        }}
        allTourHG={allTourHG}
      >
        <button
          className={`${
            countDriver * tour?.tourHaGiangDetail?.price?.localDriver +
              countSelf * tour?.tourHaGiangDetail?.price?.selfDriving ===
            0
              ? 'bg-gray-scale-5 pointer-events-none'
              : 'bg-primary-70'
          } text-white flex max-lg:justify-between max-lg:items-center lg:flex-col gap-y-[0.25rem] py-[0.75rem] px-[1.5rem] rounded-[0.5rem] max-md:w-full max-lg:w-full max-lg:mt-[4.6rem] max-md:mt-[6.4rem] max-lg:p-[2rem] max-lg:mx-auto max-md:p-[3.2rem] max-lg:rounded-[2.13rem] `}
        >
          <span className='lg:text-center max-lg:w-fit text-[1.625rem] font-bold leading-[1.23] block w-full max-lg:text-[5.33rem] max-lg:leading-[1.2] max-lg:tracking-[0.008rem]'>
            $
            {countDriver * tour?.tourHaGiangDetail?.price?.localDriver +
              countSelf * tour?.tourHaGiangDetail?.price?.selfDriving}
          </span>
          <span className=' text-center text-[0.875rem] font-bold leading-[1.43] tracking-[0.00875rem] max-lg:text-[3.467rem] max-lg:font-semibold max-lg:leading-[1.53] whitespace-nowrap'>
            BOOK NOW
          </span>
        </button>
      </PopupBookNow>
    </div>
  )
}
