export default function TittleIcon({ children, title }) {
  return (
    <div className='flex gap-x-[0.37rem] max-lg:gap-x-[1rem] max-md:gap-x-[1.6rem] items-center'>
      {children}
      <span className='text-gray-scale-5 text-[0.875rem] max-lg:text-[1.875rem] font-medium leading-[1.57] tracking-[0.00219rem] max-md:text-[3.467rem] max-md:leading-[1.38]'>
        {title}
      </span>
    </div>
  )
}
