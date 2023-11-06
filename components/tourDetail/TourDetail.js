'use client'
import { useMediaQuery } from 'react-responsive'
import AboutTour from '../global/AboutTour'
import Subtitle from '../global/SubTitle'

function TourDetail({ data }) {
  const isMobile = useMediaQuery({ maxWidth: 767.9 })
  return (
    <section
      className='flex flex-col mt-[6.25rem] mx-auto w-[87.5rem] max-lg:w-[95vw] max-md:w-full'
      id='tourId'
    >
      <Subtitle
        subTitle={data?.subtitle}
        title={data?.title}
        boxClass={'md:mb-[1.87rem] flex flex-col md:text-center max-md:pl-[4.27rem]'}
      />
      <div className='flex flex-col md:gap-[2.5rem] max-md:mt-[4.68rem]'>
        {data?.listDetail?.map((e, index) => (
          <AboutTour
            key={index}
            data={e}
            isMobile={isMobile}
          />
        ))}
      </div>
    </section>
  )
}

export default TourDetail
