import SubTitle from '../global/SubTitle'
import SlideGreatTrips from './SlideGreatTrips'

export default function GreatTrips({ section3, allTourHG }) {
  return (
    <section className='mt-[6.25rem] max-md:mt-[16rem] relative h-[49.4rem] max-lg:h-[64rem] max-md:h-fit'>
      <SubTitle
        title={section3?.title}
        subTitle={section3?.subtitle}
        boxClass={`max-md:text-white md:text-white text-center md:pt-[3rem]`}
      />
      <SlideGreatTrips allTourHG={allTourHG} />
      <div className='absolute bottom-[10.69rem] left-0 z-[2] w-full h-[21.9375rem] bg-gradient-greatTrips max-md:hidden'></div>
      <div className='absolute top-0 left-0 z-0 w-full h-[30rem] -translate-y-[60%] bg-gradient-greatTrips max-md:hidden'></div>
    </section>
  )
}
