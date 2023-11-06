import Link from 'next/link'
import IconMaskButton from '../icons/IconMaskButton'
const stylePrimary = 'text-white bg-primary-70 border border-solid border-primary-70'

const styleDefault = 'box-border border border-solid border-primary-70 text-primary-70 hover:bg-primary-70'

export default function Button({ href, className, type = 'button', primary, content, maskClass, classContent }) {
  return (
    <>
      {href ? (
        <Link
          className={`${className} ${
            primary ? stylePrimary : styleDefault
          } relative group/item rounded-[0.5rem] max-lg:rounded-[1rem] z-20 transition-all duration-500 uppercase py-[0.75rem] max-md:py-[3.2rem] max-md:px-[6.4rem] px-[1.5rem] max-lg:px-[2.5rem] max-lg:py-[1.5rem] text-[0.8125rem] max-lg:text-[1.8125rem] font-bold leading-[1.54] max-md:rounded-[2.13rem] max-md:text-[3.467rem] max-md:font-bold max-md:leading-[1.53] text-center inline-block font-poppins`}
          href={href || '/'}
        >
          <IconMaskButton
            className={`${
              maskClass ? maskClass : 'w-[6.31831rem]'
            } absolute z-0 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-md:w-[33.62187rem] max-md:h-[8.07093rem] h-[1.99675rem] opacity-0 group-hover/item:opacity-100 `}
          />
          <span
            className={`${
              classContent ? classContent : ''
            } relative z-[1] group-hover/item:text-white text-[0.8125rem] max-lg:text-[1.69rem] max-md:text-[3.46rem]`}
          >
            {content}
          </span>
        </Link>
      ) : (
        <button
          type={type}
          className={`${className} ${
            primary ? stylePrimary : styleDefault
          } relative group/item rounded-[0.5rem] max-lg:rounded-[1rem] z-20 transition-all duration-500 uppercase py-[0.75rem] max-md:py-[3.2rem] max-md:px-[6.4rem] px-[1.5rem] max-lg:px-[2.5rem] max-lg:py-[1.5rem] text-[0.8125rem] max-lg:text-[1.8125rem] font-bold leading-[1.54] max-md:rounded-[2.13rem] max-md:text-[3.467rem] max-md:font-bold max-md:leading-[1.53] text-center i font-poppins flex items-center`}
        >
          <IconMaskButton
            className={`${
              maskClass ? maskClass : 'w-[6.31831rem]'
            } absolute z-0 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-md:w-[33.62187rem] max-md:h-[8.07093rem] h-[1.99675rem] opacity-0 group-hover/item:opacity-100 `}
          />
          <span
            className={`${
              classContent ? classContent : ''
            } relative z-[1] text-[0.8125rem] max-lg:text-[1.69rem] max-md:text-[3.46rem]`}
          >
            {content}
          </span>
          {/* <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className={`${
                 ? '' : 'hidden'
              } animate-spin w-[1.25rem] h-[1.25rem] ml-[0.5rem] flex-shrink-0 text-white`}
            >
              <circle
                class='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                stroke-width='4'
              ></circle>
              <path
                class='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg> */}
        </button>
      )}
    </>
  )
}
