export default function SubTitle({ subTitle = '', title = '', subTitleClass = '', titleClass = '', boxClass = '' }) {
  return (
    <div className={`${boxClass} uppercase text-primary-70 w-full relative z-[5] font-heavitas`}>
      <h3
        data-aos='fade-up'
        className={`${subTitleClass} text-[1rem] leading-[1] max-lg:text-[2.5rem] max-md:text-[3.2rem] mb-[0.65rem] max-md:mb-[2.13rem]`}
      >
        {subTitle || 'Sub title'}
      </h3>
      <h2
        data-aos='fade-up'
        data-aos-delay='100'
        className={`${titleClass} text-[3rem] leading-[1] max-lg:text-[4.5rem] max-md:text-[6.4rem]`}
      >
        {title || 'Title'}
      </h2>
    </div>
  )
}
