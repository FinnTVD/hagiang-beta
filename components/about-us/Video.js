'use client'

import ReactPlayer from 'react-player'

export default function Video({ video }) {
  return (
    <section className='px-[8.875rem] mt-[6.25rem] max-md:hidden max-lg:px-[6.5rem] flex justify-center'>
      {/* <iframe
        width='560'
        height='315'
        src={video?.video?.url_video || 'https://www.youtube.com/embed/2uBkJJmvots?si=Eil5E2TremgKtxo88'}
        title={'Introduce video'}
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen
        className='object-cover w-full h-[46.1875rem] lg:w-[66rem] lg:h-[37rem] rounded-[1.25rem] max-lg:h-[52.5rem]'
      ></iframe> */}
      <ReactPlayer
        url={video?.video?.url_video || 'https://youtu.be/Nj6IqVLoaUg?si=0FhW12hycc5Tyzxx'}
        controls
        playsinline
        className='item-video-v2 w-full h-[46.1875rem] lg:w-[66rem] lg:h-[37rem] rounded-[1.25rem] max-lg:h-[52.5rem]'
      />
    </section>
  )
}
