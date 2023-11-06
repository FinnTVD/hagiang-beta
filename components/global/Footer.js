import Image from 'next/image'
import InfoFooter from './InfoFooter'
import phoneIcon from '@/public/images/FooterPhoneIcon.svg'
import mailIcon from '@/public/images/FooterMailIcon.svg'
import homeIcon from '@/public/images/FooterHomeIcon.svg'
import worldIcon from '@/public/images/FooterWorldIcon.svg'
import transportIcon from '@/public/images/FooterTransportIcon.svg'
import locationIcon from '@/public/images/FooterLocationIcon.svg'
import getData from '@/utils/getData'
import { GET_DATA_FOOTER } from '@/graphql/home/queries'
import Link from 'next/link'
import BgFooter from '../icons/BgFooter'

export default async function Footer() {
  const data = await getData(GET_DATA_FOOTER)
  const footer = data?.data?.page?.homeHG?.footer
  return (
    <footer
      id='footer'
      className='relative overflow-hidden font-poppins max-md:h-[105vh]'
    >
      <BgFooter className='w-full md:h-[58.5625rem] h-full absolute top-0 left-0 z-0 max-md:inset-0' />
      <Image
        className='z-0 max-md:h-[111.6rem] h-full absolute md:inset-0 bottom-0 w-full object-cover images-house'
        alt={footer?.background?.altText || footer?.background?.title}
        src={footer?.background?.sourceUrl || '/images/bg-footer.png'}
        width={1600}
        height={900}
        // object-cover
      />
      <div className='lg:h-screen max-md:h-auto w-[87.5rem] max-md:w-[91.46667rem] relative mx-auto max-md:pb-[74.6rem] max-lg:h-[130rem]'>
        <div className='flex justify-between items-center w-full relative z-[1] max-md:px-[4.27rem] max-lg:flex-col'>
          <Link
            href='/'
            className='block w-fit h-fit'
          >
            <Image
              className='md:w-[14.75rem] w-[34.67493rem] md:h-[14.05rem] h-[30.4rem] md:mt-[9.13rem] mt-[6rem] object-contain'
              alt={footer?.logo?.altText || footer?.logo?.title}
              src={footer?.logo?.sourceUrl || '/images/logo-footer.png'}
              width={220}
              height={200}
            />
          </Link>
          <div className='flex md:gap-x-[9.47rem] lg:gap-x-[4rem] md:mt-[9.13rem] mt-[10rem] max-md:flex-col gap-[8rem] max-md:text-center flex-wrap'>
            <div className='flex-col justify-center max-md:flex max-lg:w-[35rem] max-md:w-auto'>
              <h2 className='lg:text-[0.875rem] md:font-[700] font-[600] md:leading-[1.25rem] leading-[4.8rem] md:tracking-[0.00875rem] text-[3.46667rem] md:text-[1.8vw]'>
                CONTACT US
              </h2>
              <div className='flex flex-col md:gap-[0.75rem] gap-[2.13rem] md:mt-[1rem] mt-[2.13rem]'>
                <div className='flex gap-x-[0.5rem] max-md:gap-x-[2.13rem]'>
                  <Image
                    src={phoneIcon}
                    alt='icon'
                    className='lg:w-[1rem] lg:h-[1rem] w-[3.73333rem] h-[3.73333rem] mt-[0.19rem] max-md:mt-[0.53rem] md:w-[1.8rem] md:h-[1.8rem]'
                  />
                  <ul className='flex flex-col gap-y-[0.25rem] max-md:gap-y-[2.67rem]'>
                    {footer?.contactUs?.peopleContact?.map((e, index) => (
                      <li
                        key={index}
                        className='text-[0.875rem] font-normal leading-[1.57] tracking-[0.00219rem] text-gray-scale-50 max-md:text-[3.467rem] max-md:leading-[1.38] max-lg:text-[1.82rem]'
                      >
                        {e?.numberPhone + ' (' + e?.name + ')'}
                      </li>
                    ))}
                  </ul>
                </div>
                <InfoFooter
                  icon={mailIcon}
                  text={footer?.contactUs?.email}
                  href={'mailTo:' + footer?.contactUs?.email}
                />
                <InfoFooter
                  icon={homeIcon}
                  text={footer?.contactUs?.address}
                />
                <InfoFooter
                  icon={worldIcon}
                  text={footer?.contactUs?.global}
                />
              </div>
            </div>
            <div className='flex-col justify-center max-md:flex max-lg:w-[35rem] max-md:w-auto'>
              <h2 className='lg:text-[0.875rem] md:font-[700] font-[600] md:leading-[1.25rem] leading-[4.8rem] md:tracking-[0.00875rem] text-[3.46667rem] md:text-[1.8vw]'>
                ALL TOUR
              </h2>
              <div className='flex flex-col md:gap-[0.75rem] gap-[2.13rem] md:mt-[1rem] mt-[2.13rem]'>
                {data?.data?.allTourHG?.nodes?.map((e, index) => (
                  <InfoFooter
                    key={index}
                    icon={transportIcon}
                    text={e?.title}
                    href={e?.slug ? '/tour/' + e?.slug : '/'}
                  />
                ))}
              </div>
            </div>
            <div className='flex-col justify-center max-md:flex max-lg:w-[35rem] max-md:w-auto'>
              <h2 className='lg:text-[0.875rem] md:font-[700] font-[600] md:leading-[1.25rem] leading-[4.8rem] md:tracking-[0.00875rem] text-[3.46667rem] md:text-[1.8vw]'>
                CHEERS TOURS
              </h2>
              <div className='flex flex-col md:gap-[0.75rem] gap-[2.13rem] md:mt-[1rem] mt-[2.13rem]'>
                {footer?.cheersTour?.map((e, index) => (
                  <InfoFooter
                    key={index}
                    icon={locationIcon}
                    text={e?.nameTour}
                    href={e?.linkTour?.url}
                    className=''
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
