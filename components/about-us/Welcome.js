'use client'
import ReactPlayer from 'react-player'
import classes from './WelcomeStyles.module.css'

export default function Welcome({ overview, video }) {
  return (
    <section className='mt-[2.25rem] w-[40.625rem] my-0 mx-auto max-md:mt-[11.2rem] max-md:w-full max-lg:w-[65rem]'>
      <div className='flex flex-col items-center'>
        <h3
          data-aos='fade-up'
          className='text-[#B34B1E] font-heavitas text-[1rem] leading-[1] max-md:text-[3.2rem] max-lg:text-[2.08rem]'
        >
          {overview?.topTitle}
        </h3>
        <h2
          data-aos='fade-up'
          data-aos-delay='100'
          className='text-[#B34B1E] font-heavitas text-[3rem] mt-[0.75rem] leading-[1] max-md:text-[6.4rem] max-md:mt-[2.1rem] max-lg:text-[4.25rem]'
        >
          {overview?.title}
        </h2>
      </div>

      <div className='max-md:flex max-md:flex-col-reverse'>
        <ReactPlayer
          url={video?.video?.url_video || 'https://youtu.be/Nj6IqVLoaUg?si=0FhW12hycc5Tyzxx'}
          controls
          playsinline
          width='100%'
          height='100%'
          className='item-video-v2 w-full !h-[56rem] mt-[5.3rem] md:hidden'
        />
        <div className=''>
          {overview?.contentTop && (
            <div
              data-aos='fade-up'
              data-aos-delay='200'
              className={classes['welcome-description']}
              dangerouslySetInnerHTML={{ __html: overview?.contentTop }}
            />
          )}
          {overview?.contentBottom && (
            <div
              data-aos='fade-up'
              data-aos-delay='210'
              className={classes['welcome-description']}
              dangerouslySetInnerHTML={{ __html: overview?.contentBottom }}
            />
          )}
        </div>
      </div>
    </section>
  )
}
