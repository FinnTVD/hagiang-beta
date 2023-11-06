import SubTitle from '../global/SubTitle'
import { AccordionDemoV2 } from '../ui/AccordionDemoV2'

export default function TheTripDetail({ data }) {
  return (
    <section className='md:w-[95rem] w-[91.46667rem] lg:w-[87.5rem]  mx-auto mt-[6.25rem] font-poppins'>
      <SubTitle
        title={'THE TRIP'}
        subTitle={'FAQ ABOUT'}
      />
      <div className='flex md:gap-x-[2.5rem] lg:gap-x-[1.5rem] mt-[1.87rem]'>
        <AccordionDemoV2
          data={data?.listFaq}
          className={'grid grid-cols-2 gap-x-[1.5rem] max-md:flex max-md:flex-col max-md:gap-y-[3.33rem]'}
        />
      </div>
    </section>
  )
}
