'use client'
export default function ItemLane({ data, indexCurrent, index, length, setIndexCurrent }) {
  return (
    <div className='max-lg:hidden'>
      <div
        className={`${
          index + 1 <= indexCurrent ? 'bg-primary-70' : 'border border-solid border-primary-70'
        } w-[0.75rem] h-[0.75rem] rounded-full relative mx-auto`}
      >
        {index + 1 < length && (
          <>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='166'
              height='2'
              viewBox='0 0 166 2'
              fill='none'
              className='absolute right-[-0.63rem] translate-x-full top-1/2 -translate-y-1/2 w-[10.25rem]'
            >
              <path
                d='M1 1H165'
                stroke='#B34B1E'
                strokeOpacity='0.26'
                strokeWidth='2'
                strokeLinecap='round'
                strokeDasharray='10 10'
              />
            </svg>
            <div
              className={`${
                indexCurrent - 1 >= index + 1 ? 'w-[10.25rem]' : 'w-0'
              } absolute transition-all duration-300 right-[-0.63rem] translate-x-full top-1/2 -translate-y-1/2 h-[2px] bg-primary-70`}
            ></div>
          </>
        )}
      </div>
      <button
        onClick={() => setIndexCurrent(index + 1)}
        className={`${
          index + 1 === indexCurrent ? 'bg-primary-5' : 'bg-[#F9F9F9]'
        } w-[7.0625rem] h-[2.75rem] max-md:w-[25.3rem] max-md:h-[15.46rem] rounded-[0.5rem] flex justify-center mt-[0.94rem] items-center text-[1rem] font-bold leading-normal tracking-[0.0125rem] text-gray-scale-80 max-md:text-[3.7rem]`}
      >
        DAY {index + 1}
      </button>
      <span className='block text-center mt-[0.75rem] mb-[1.25rem] text-gray-scale-80 text-[0.875rem] font-bold leading-[1.43] tracking-[0.00875rem]'>
        {data?.distanceLength}
      </span>
      <ul className='flex gap-y-[2.93rem] flex-col '>
        {data?.listProvince?.map((e, i) => (
          <li
            className={`${
              index + 1 === indexCurrent ? 'bg-[#F2FFBF] text-gray-scale-80' : 'bg-[#F9F9F9] text-gray-scale-50'
            } w-[7.0625rem] rounded-[0.5rem] h-fit py-[0.38rem] flex justify-center items-center text-[0.875rem] leading-[1.43] tracking-[0.00875rem] font-medium relative`}
            key={i}
          >
            {e?.province}
            {i < data?.listProvince?.length - 1 && (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='9'
                height='35'
                viewBox='0 0 9 35'
                fill='none'
                className='absolute bottom-[-0.25rem] -translate-x-1/2 translate-y-full left-1/2 max-lg:hidden h-[2.5rem]'
              >
                <path
                  d='M4.5 26.9102C2.29086 26.9102 0.500001 28.701 0.500001 30.9102C0.500001 33.1193 2.29086 34.9102 4.5 34.9102C6.70914 34.9102 8.5 33.1193 8.5 30.9102C8.5 28.701 6.70914 26.9102 4.5 26.9102ZM3.75 3.27835e-08L3.75 2.57585L5.25 2.57585L5.25 -3.27835e-08L3.75 3.27835e-08ZM3.75 7.72754L3.75 12.8792L5.25 12.8792L5.25 7.72754L3.75 7.72754ZM3.75 18.0309L3.75 23.1826L5.25 23.1826L5.25 18.0309L3.75 18.0309ZM3.75 28.3343L3.75 30.9102L5.25 30.9102L5.25 28.3343L3.75 28.3343Z'
                  fill={index + 1 === indexCurrent ? '#2A8400' : '#CFCFCF'}
                />
              </svg>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
