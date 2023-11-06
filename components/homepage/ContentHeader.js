export default function ContentHeader({ header }) {
  return (
    <div
      id='slogan-header'
      className='absolute top-1/3 left-[30%] max-md:left-[18%] max-lg:left-[18%]'
    >
      {header?.slogan && (
        <div
          id='box-slogan'
          className='relative flex flex-col text-white'
          dangerouslySetInnerHTML={{ __html: header?.slogan }}
          data-aos='zoom-in-up'
        />
      )}
      {/* <h2 className='text-[4rem] font-heavitas text-white font-normal leading-normal max-md:text-[6.4rem] max-xl:hidden max-lg:text-[6rem]'>
        BACKPACK UP
      </h2>
      <div className='font-tomatoes text-[8rem] max-md:text-[16rem] max-lg:text-[12rem] max-lg:left-[53%] max-lg:top-[37%] font-normal leading-normal absolute left-[60%] top-[30%] whitespace-nowrap max-xl:hidden'>
        <IconTextHeader />
      </div> */}
    </div>
  )
}
