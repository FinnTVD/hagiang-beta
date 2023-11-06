'use client'
import ReactPlayer from 'react-player'

export default function BoxVideo({ data }) {
  return (
    <section className='mx-auto lg:w-[66rem] lg:h-[37rem] md:w-[87.5rem] h-[47rem] mt-[6.25rem] max-md:px-0 max-md:mt-[5.3rem] max-md:h-[56rem] w-full'>
      {/* <div className='w-full h-full'>
        <iframe
          width='560'
          height='315'
          src={data?.videoTour?.url || 'https://www.youtube.com/embed/Nj6IqVLoaUg?si=RMqLq4uUSDQRlV-Y'}
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowfullscreen
          className='object-cover w-full h-full rounded-[1.25rem] max-md:rounded-none'
        ></iframe>
      </div> */}
      <ReactPlayer
        url={data?.videoTour?.url || 'https://youtu.be/Nj6IqVLoaUg?si=0FhW12hycc5Tyzxx'}
        controls
        playsinline
        width='100%'
        height='100%'
        className='item-video-v2 w-full h-full rounded-[1.25rem] max-md:rounded-none overflow-hidden'
      />
    </section>
  )
}
