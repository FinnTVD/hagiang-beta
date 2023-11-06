import Link from 'next/link'

export default function ItemMenu({ children, title, href, onClick, isActive }) {
  return (
    <>
      {href ? (
        <Link
          href={href || '/'}
          className='flex flex-col justify-center items-center gap-y-[1rem] select-none'
          onClick={onClick}
        >
          {children}
          <span
            className={`${
              isActive ? 'text-primary-70' : 'text-secondary-green-900'
            } 'font-poppins inline-block text-[3.46667rem] font-medium leading-[1.6] text-secondary-green-900'`}
          >
            {title}
          </span>
        </Link>
      ) : (
        <div
          onClick={onClick}
          className='flex flex-col justify-center items-center gap-y-[1rem] cursor-pointer select-none'
        >
          {children}
          <span
            className={`${
              isActive ? 'text-primary-70' : 'text-secondary-green-900'
            } 'font-poppins inline-block text-[3.46667rem] font-medium leading-[1.6] text-secondary-green-900'`}
          >
            {title}
          </span>
        </div>
      )}
    </>
  )
}
