import Image from 'next/image'

const data = new Array(4).fill(0)
export default function ValueTowards({ valueTowards }) {
  let dupData = []
  if (valueTowards) {
    for (let i = 0; i < 2; i++) {
      valueTowards?.content?.forEach((item, index) => {
        dupData.push(item)
      })
    }
  }
  return (
    <section
      id='value-toward'
      className='mt-[6.25rem] px-[6.25rem] max-lg:px-0 overflow-hidden max-md:mt-[16rem]'
    >
      <div className='flex flex-col items-center'>
        <h3
          data-aos='fade-up'
          className='text-[#B34B1E] font-heavitas text-[1rem] leading-[1] max-md:text-[3.2rem] max-lg:text-[2.08rem]'
        >
          {' '}
          {valueTowards?.topTitle}{' '}
        </h3>
        <h2
          data-aos='fade-up'
          data-aos-delay='200'
          className='text-[#B34B1E] font-heavitas text-[3rem] mt-[0.75rem] leading-[1] max-md:text-[6.4rem] max-md:mt-[2.1rem] max-lg:text-[4.25rem]'
        >
          {' '}
          {valueTowards?.title}{' '}
        </h2>
      </div>
      <div className='mt-[2.5rem] flex flex-col gap-[8.375rem] max-lg:hidden'>
        {valueTowards?.content?.map((item, index) => (
          <div
            className={`${index % 2 == 0 ? 'flex-row' : 'flex-row-reverse'} flex gap-[4.75rem]`}
            key={index}
          >
            <Image
              data-aos={index % 2 == 0 ? 'fade-right' : 'fade-left'}
              alt='value-towards-picture'
              src={item?.image?.sourceUrl}
              width={688}
              height={431}
              className='w-[43rem] flex-1 h-[26.9375rem] rounded-[1rem] object-cover'
            ></Image>
            <div className='flex relative flex-1 items-start mt-[4.43rem]'>
              <div
                className='flex justify-center items-center w-[13.625rem] h-[13.625rem] rounded-[50%] flex-shrink-0'
                style={{
                  background:
                    'linear-gradient(180deg, rgba(246, 185, 0, 0.60) 7.88%, rgba(255, 255, 255, 0.00) 98.49%)',
                  backdropFilter: 'blur(1.6rem)',
                }}
              >
                <Image
                  alt='vale-towards-icon'
                  src={item?.icon?.sourceUrl}
                  width={218}
                  height={218}
                  className='h-[6.25rem] w-auto'
                ></Image>
              </div>
              <div
                data-aos={index % 2 == 0 ? 'fade-left' : 'fade-right'}
                className='pt-[5rem] ml-[-2rem] relative z-[2]'
              >
                <h3 className='text-[#05320C] text-[1.625rem] font-bold leading-[1.23] font-poppins'>{item?.title}</h3>
                <p className='mt-[1.25rem] text-[#727272] text-[0.875rem] leading-[1.57] tracking-[0.035] font-poppins'>
                  {item?.content}
                </p>
              </div>
              {index + 1 <= data.length - 1 && index % 2 === 0 && (
                <svg
                  className='absolute top-[13.625rem] right-[33.8rem] h-auto w-[46rem] line-value-about line-value-about-right'
                  xmlns='http://www.w3.org/2000/svg'
                  width='777'
                  height='360'
                  viewBox='0 0 777 360'
                  fill='none'
                >
                  <path
                    d='M775 0V205.466C775 209.884 771.418 213.466 767 213.466H9.99999C5.58171 213.466 2 217.048 2 221.466V286.733V360'
                    stroke='#FED35F'
                    strokeWidth='3'
                    strokeDasharray='24 24'
                  />
                </svg>
              )}
              {index + 1 <= data.length - 1 && index % 2 !== 0 && (
                <svg
                  className='absolute top-[13.625rem] left-[6.6125rem] h-auto w-[46rem] line-value-about'
                  xmlns='http://www.w3.org/2000/svg'
                  width='777'
                  height='360'
                  viewBox='0 0 777 360'
                  fill='none'
                >
                  <path
                    d='M2 0V205.17C2 209.588 5.58172 213.17 10 213.17H767C771.418 213.17 775 216.751 775 221.17V286.335V359.5'
                    stroke='#FED35F'
                    strokeWidth='3'
                    strokeDasharray='24 24'
                  />
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className='lg:hidden max-md:w-[91.46667rem] max-lg:w-[95rem] mx-auto'>
        {valueTowards?.content?.map((item, index) => (
          <div key={index}>
            <div className='h-[57.3rem] w-full mt-[5.3rem] '>
              <Image
                src={item?.image?.sourceUrl}
                alt='cheers tour'
                width={500}
                height={400}
                className='w-full h-full object-cover rounded-[2rem]'
              />
            </div>
            <div className='!flex flex-col items-center mt-[5.3rem]'>
              <div
                className='flex justify-center items-center w-[34rem] h-[34rem] rounded-[50%]'
                style={{
                  background:
                    'linear-gradient(180deg, rgba(246, 185, 0, 0.60) 7.88%, rgba(255, 255, 255, 0.00) 98.49%)',
                  backdropFilter: 'blur(6.9rem)',
                }}
              >
                <Image
                  src={item?.icon?.sourceUrl}
                  alt='cheer tour'
                  width={200}
                  height={200}
                  className='w-auto h-[12.2rem] object-cover'
                />
              </div>
              <h3 className='text-[#05320C] text-[3.7rem] font-bold leading-[1.23] font-poppins mt-[-4rem] text-center relative z-[2] max-lg:text-[3.3rem]'>
                {item?.title}
              </h3>
            </div>
            <div className='px-[2.5rem] mt-[5.3rem]'>
              <p className='text-[#727272] text-[3.7rem] leading-[1.57] tracking-[0.035] font-poppins text-center max-lg:text-[1.8rem] max-md:text-[3.7rem]'>
                {item?.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
