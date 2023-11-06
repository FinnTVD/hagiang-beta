import Image from 'next/image'
import Link from 'next/link'

export default function DestinationListItems({ dataDestination }) {
  return (
    <div className='grid grid-cols-4 gap-x-[1.5rem] gap-y-[2rem] px-[6.25rem] relative z-[4] bg-white mb-[8.25rem] max-md:grid-cols-1 max-md:px-[4.27rem] max-md:gap-x-[4.27rem] max-md:gap-y-[6.4rem] max-md:mb-[30rem] max-lg:grid-cols-2'>
      {dataDestination?.item?.map((itm, index) => (
        <div
          key={index}
          className='relative overflow-hidden group'
          data-aos='fade-up'
          data-aos-anchor-placement='top-bottom'
          data-aos-delay={`${index * 150}`}
        >
          <Image
            width={500}
            height={600}
            src={itm?.picture?.sourceUrl}
            alt='item destination'
            className='w-full h-[25.875rem] object-cover rounded-[1rem] max-md:rounded-[2rem] max-md:h-[113rem] max-lg:h-[50.5rem]'
          />
          <div className='group-hover:opacity-0 transition-all duration-200 flex flex-col items-center py-[0.75rem] w-[85.5%] bg-[#B34B1E] rounded-[1.5rem] gap-[0.25rem] absolute bottom-[1.5rem] left-[50%] translate-x-[-50%] max-md:bottom-[5.5rem] max-md:py-[1.94rem] max-md:rounded-[2rem]'>
            <h2 className='text-white font-poppins text-[1rem] font-bold leading-[1.5] tracking-[0.08px] uppercase line-clamp-1 max-md:text-[4.67rem] max-lg:text-[2.08rem]'>
              {itm.title}
            </h2>
            <div className='flex gap-[0.5rem] items-center max-md:gap-[2.5rem] max-lg:gap-[1rem]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                className='w-[1rem] h-auto max-md:w-[3rem] max-lg:w-[2.08rem]'
              >
                <circle
                  cx='3.5'
                  cy='4.5'
                  r='2.5'
                  fill='#F6B900'
                />
                <circle
                  cx='12.5'
                  cy='4.5'
                  r='2.5'
                  fill='#F6B900'
                />
                <path
                  d='M11.75 13.625C11.75 13.8875 11.5438 14.0938 11.2812 14.0938H4.71875C4.45622 14.0938 4.25 13.8875 4.25 13.625C4.25 13.3625 4.45622 13.1562 4.71875 13.1562H11.2812C11.5438 13.1562 11.75 13.3625 11.75 13.625Z'
                  fill='white'
                />
                <path
                  d='M3.78125 12.2188C3.00309 12.2188 2.375 12.8468 2.375 13.625C2.375 14.3937 2.98441 15.0312 3.78125 15.0312C4.57809 15.0312 5.1875 14.3844 5.1875 13.625C5.1875 12.8468 4.55941 12.2188 3.78125 12.2188Z'
                  fill='#F6B900'
                />
                <path
                  d='M3.78125 0.96875C1.70934 0.96875 0 2.64684 0 4.71875C0 5.44066 0.237469 6.13438 0.621875 6.73441L3.3875 11.0657C3.47184 11.1969 3.62188 11.2812 3.78122 11.2812C3.94056 11.2812 4.09063 11.1968 4.17494 11.0657L6.94056 6.73441C7.32497 6.13441 7.53119 5.44066 7.53119 4.71875C7.53125 2.64684 5.85316 0.96875 3.78125 0.96875ZM3.78125 6.59375C2.75003 6.59375 1.90625 5.74997 1.90625 4.71875C1.90625 3.68753 2.75003 2.84375 3.78125 2.84375C4.81247 2.84375 5.65625 3.68753 5.65625 4.71875C5.65625 5.74997 4.81247 6.59375 3.78125 6.59375Z'
                  fill='white'
                />
                <path
                  d='M12.2188 0.96875C10.1468 0.96875 8.46875 2.64684 8.46875 4.71875C8.46875 5.44066 8.67497 6.13438 9.05937 6.73441L11.825 11.0657C11.9093 11.1969 12.0594 11.2812 12.2187 11.2812C12.3781 11.2812 12.5281 11.1968 12.6124 11.0657L15.4093 6.73441C15.7937 6.13441 15.9999 5.44066 15.9999 4.71875C16 2.64684 14.2907 0.96875 12.2188 0.96875ZM12.2188 6.59375C11.1875 6.59375 10.3438 5.74997 10.3438 4.71875C10.3438 3.68753 11.1875 2.84375 12.2188 2.84375C13.25 2.84375 14.0938 3.68753 14.0938 4.71875C14.0938 5.74997 13.25 6.59375 12.2188 6.59375Z'
                  fill='white'
                />
                <path
                  d='M12.2188 12.2188C11.4406 12.2188 10.8125 12.8468 10.8125 13.625C10.8125 14.3937 11.4219 15.0312 12.2188 15.0312C13.0156 15.0312 13.625 14.3844 13.625 13.625C13.625 12.8468 12.9969 12.2188 12.2188 12.2188Z'
                  fill='#F6B900'
                />
              </svg>
              <span className='text-white text-[0.8125rem] font-poppins font-semibold leading-[1.23] tracking-[0.5px] line-clamp-2 max-md:text-[3.875rem] max-lg:text-[1.69rem]'>
                {itm?.distance}
              </span>
            </div>
          </div>
          <div className='contentHidden flex flex-col items-center bg-[#0000007d] bg-opacity-[0.95] py-[1.5rem] px-[1.5rem] rounded-[1rem] absolute w-full h-full left-0 top-0 translate-y-[100%] group-hover:translate-y-0 transition-all duration-300 max-md:p-[3.5rem] max-md:w-[90%] max-md:h-[90%] max-md:left-[5%] max-md:top-[5%] max-md:translate-y-[110%] max-md:rounded-[2rem]'>
            <div className='flex flex-col items-center rounded-[1.5rem] gap-[0.25rem]'>
              <h2 className='text-[#f78826] font-poppins text-[1rem] font-bold leading-[1.5] tracking-[0.08px] uppercase line-clamp-1 max-md:text-[4.67rem] max-lg:text-[2.08rem]'>
                {itm.title}
              </h2>
              <div className='flex gap-[0.5rem] max-md:gap-[1rem] items-center max-lg:gap-[1rem]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  className='w-[1rem] h-auto max-md:w-[3rem] max-lg:w-[2.08rem]'
                >
                  <circle
                    cx='3.5'
                    cy='4.5'
                    r='2.5'
                    fill='#F6B900'
                  />
                  <circle
                    cx='12.5'
                    cy='4.5'
                    r='2.5'
                    fill='#F6B900'
                  />
                  <path
                    d='M11.75 13.625C11.75 13.8875 11.5438 14.0938 11.2812 14.0938H4.71875C4.45622 14.0938 4.25 13.8875 4.25 13.625C4.25 13.3625 4.45622 13.1562 4.71875 13.1562H11.2812C11.5438 13.1562 11.75 13.3625 11.75 13.625Z'
                    fill='#B34B1E'
                  />
                  <path
                    d='M3.78125 12.2188C3.00309 12.2188 2.375 12.8468 2.375 13.625C2.375 14.3937 2.98441 15.0312 3.78125 15.0312C4.57809 15.0312 5.1875 14.3844 5.1875 13.625C5.1875 12.8468 4.55941 12.2188 3.78125 12.2188Z'
                    fill='#F6B900'
                  />
                  <path
                    d='M3.78125 0.96875C1.70934 0.96875 0 2.64684 0 4.71875C0 5.44066 0.237469 6.13438 0.621875 6.73441L3.3875 11.0657C3.47184 11.1969 3.62188 11.2812 3.78122 11.2812C3.94056 11.2812 4.09063 11.1968 4.17494 11.0657L6.94056 6.73441C7.32497 6.13441 7.53119 5.44066 7.53119 4.71875C7.53125 2.64684 5.85316 0.96875 3.78125 0.96875ZM3.78125 6.59375C2.75003 6.59375 1.90625 5.74997 1.90625 4.71875C1.90625 3.68753 2.75003 2.84375 3.78125 2.84375C4.81247 2.84375 5.65625 3.68753 5.65625 4.71875C5.65625 5.74997 4.81247 6.59375 3.78125 6.59375Z'
                    fill='#B34B1E'
                  />
                  <path
                    d='M12.2188 0.96875C10.1468 0.96875 8.46875 2.64684 8.46875 4.71875C8.46875 5.44066 8.67497 6.13438 9.05937 6.73441L11.825 11.0657C11.9093 11.1969 12.0594 11.2812 12.2187 11.2812C12.3781 11.2812 12.5281 11.1968 12.6124 11.0657L15.4093 6.73441C15.7937 6.13441 15.9999 5.44066 15.9999 4.71875C16 2.64684 14.2907 0.96875 12.2188 0.96875ZM12.2188 6.59375C11.1875 6.59375 10.3438 5.74997 10.3438 4.71875C10.3438 3.68753 11.1875 2.84375 12.2188 2.84375C13.25 2.84375 14.0938 3.68753 14.0938 4.71875C14.0938 5.74997 13.25 6.59375 12.2188 6.59375Z'
                    fill='#B34B1E'
                  />
                  <path
                    d='M12.2188 12.2188C11.4406 12.2188 10.8125 12.8468 10.8125 13.625C10.8125 14.3937 11.4219 15.0312 12.2188 15.0312C13.0156 15.0312 13.625 14.3844 13.625 13.625C13.625 12.8468 12.9969 12.2188 12.2188 12.2188Z'
                    fill='#F6B900'
                  />
                </svg>
                <span className='text-white text-[0.8125rem] font-poppins font-semibold leading-[1.23] tracking-[0.5px] line-clamp-2 max-md:text-[3.875rem] max-lg:text-[1.69rem]'>
                  {itm?.distance}
                </span>
              </div>
            </div>
            <p className='h-[80%] flex-grow pt-[0.75rem] mt-[0.75rem] font-normal font-poppins text-[0.875rem] leading-[1.57] tracking-[0.035px] border-t border-[#D9D9D9] border-opacity-40 max-md:text-[3.875rem] max-md:pt-[1.5rem] max-md:mt-[1.5rem] max-lg:text-[1.82rem] text-[#ffffffed] line-clamp-[12]'>
              {itm?.description}
            </p>
            <Link
              href={itm?.map || '/'}
              target='_blank'
              className='p-[0.75rem] flex items-center gap-[0.5rem] bg-white rounded-[1rem] max-md:p-[1.5rem] max-md:rounded-[2rem] max-md:gap-[2.5rem] max-lg:gap-[1rem]'
              style={{
                boxShadow:
                  '6px 6px 40px 0px rgba(0, 0, 0, 0.06), -16px -16px 40px 0px rgba(0, 0, 0, 0.08), 0px 0px 24px 0px rgba(255, 239, 220, 0.50)',
              }}
            >
              <Image
                src={'/icons/ggmap.svg'}
                width={16}
                height={16}
                alt='google map'
                className='w-[1rem] max-md:w-[4rem] max-lg:w-[2rem]'
              />
              <span className='font-poppins font-medium text-[0.75rem] leading-[1.33] tracking-[0.5px] max-md:text-[3.85rem] max-lg:text-[1.5625rem] text-black'>
                {' '}
                Google Map{' '}
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
