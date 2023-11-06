import Image from 'next/image'
import SubTitle from '../global/SubTitle'
import SlideCheersTour from './SlideCheersTour'
import Button from '../global/Button'
import { PopupBookNow } from '../global/PopupBookNow'

export default function CheersTour({ section2, allTourHG, isOther }) {
  return (
    <section
      id='cheers-tour'
      className={`${
        isOther ? 'md:!hidden max-md:!overflow-hidden max-md:mt-[6.4rem]' : 'max-md:mt-[16rem]'
      } mt-[6.25rem] max-lg:w-[95vw] lg:flex lg:justify-between lg:flex-row-reverse relative h-fit w-[87.5rem] max-md:w-full z-[10] font-poppins mx-auto`}
    >
      {!isOther && (
        <SubTitle
          boxClass={'lg:!absolute lg:top-0 lg:left-0 lg:!w-[26.875rem] max-md:!w-[58.4rem]  max-md:!px-[4.27rem]'}
          subTitle={section2?.subTitle}
          title={section2?.title}
        />
      )}
      <div
        data-aos='fade-left'
        className='max-md:px-[4.27rem] relative lg:w-[35.4375rem] max-md:mt-[6rem] max-md:w-[86.4rem] max-lg:mt-[4rem] md:h-[57rem] md:w-[51rem] max-md:h-[104.83733rem] lg:h-auto lg:mr-0 max-lg:mx-auto'
      >
        <Image
          className=' max-md:object-contain lg:object-fill z-[0]'
          src={section2?.map?.sourceUrl || '/images/mapvn.png'}
          alt={section2?.map?.altText || section2?.map?.title}
          fill
          sizes='100vw'
          quality={100}
        />
      </div>
      <div
        data-aos='fade-up'
        className='lg:pt-[9.17rem] lg:w-fit max-md:mt-[2.33rem] max-md:overflow-hidden max-lg:mt-[1.5rem]'
      >
        <ul className='grid grid-cols-2 gap-[1.51rem] max-md:hidden max-lg:w-[80rem] max-md:w-full md:mx-auto lg:mx-0'>
          {section2?.listTitle?.map((e, index) => (
            <li
              key={index}
              className='h-[5.13175rem] w-[20.60419rem] max-lg:h-[13rem] max-lg:w-[36rem] relative flex justify-center items-center'
            >
              <Image
                className='z-0 object-contain'
                src={'/images/bg-text-cheer.png'}
                alt='text'
                fill
                sizes='100vw'
              />
              <span className='relative z-[1] text-[0.875rem] max-lg:text-[1.5rem] text-primary-5 font-bold leading-[1.375] tracking-[0.00219rem] line-clamp-1'>
                {e?.title}
              </span>
            </li>
          ))}
        </ul>
        <SlideCheersTour section2={section2} />
        {section2?.description && (
          <div
            data-aos='fade-up'
            className='description lg:w-[43rem] mt-[2.39rem] max-md:mt-[5.33rem] max-md:text-justify max-md:px-[4.27rem] text-gray-scale-50 text-[0.875rem] max-lg:text-[1.875rem] font-normal leading-[1.375] tracking-[0.00219rem] max-md:text-[3.733rem] max-md:leading-[1.57] max-md:tracking-[0.00933rem]'
            dangerouslySetInnerHTML={{ __html: section2?.description }}
          />
        )}

        <div className='flex gap-x-[1rem] max-lg:gap-x-[2.5rem] max-md:gap-x-[3.2rem] mt-[1.87rem] max-lg:mt-[2.5rem] max-md:mt-[5.33rem] max-md:px-[4.27rem]'>
          <PopupBookNow allTourHG={allTourHG}>
            <div className='max-md:w-[calc(50%-1.6rem)]'>
              <Button
                primary={true}
                content={'book now'}
                className={'max-md:h-[12.8rem] max-md:w-full'}
              />
            </div>
          </PopupBookNow>
          <Button
            href={'/about-us'}
            content={'read more'}
            className={'max-md:h-[12.8rem] max-md:w-[calc(50%-1.6rem)]'}
          />
        </div>
      </div>
    </section>
  )
}
