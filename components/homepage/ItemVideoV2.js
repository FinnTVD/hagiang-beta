'use client'
import { useEffect, useState } from 'react'
import IconMuted from '../icons/IconMuted'
import IconAudio from '../icons/IconAudio'
import ReactPlayer from 'react-player'

export default function ItemVideoV2({ e, index, indexSlider, isActive }) {
  const [isMute, setIsMute] = useState(true)
  const [isPlay, setIsPlay] = useState()

  useEffect(() => {
    if (indexSlider !== index || !isActive) {
      setIsPlay(false)
    }
    if (isActive && indexSlider === index) {
      setIsPlay(true)
    }
  }, [indexSlider, isActive])

  useEffect(() => {
    setIsMute(true)
  }, [indexSlider])

  return (
    <>
      <ReactPlayer
        url={e?.linkVideo?.url || '/images/video1.mp4'}
        loop
        muted={isMute}
        playing={isPlay}
        playsinline
        width='100%'
        height='100%'
        className='item-video-v2 w-full h-full lg:rounded-[1rem] min-w-full min-h-full'
      />

      <div
        onClick={() => setIsMute(!isMute)}
        className='absolute bottom-[3.75rem] right-[6.25rem] z-[99] cursor-pointer max-md:right-[4.27rem] max-md:bottom-[5.23rem] max-lg:right-[6.25rem] max-lg:bottom-[6.75rem]'
      >
        {isMute ? (
          <IconMuted className='lg:w-[2.5rem] lg:h-[2.5rem] max-md:w-[10.67rem] max-md:h-[10.67rem] max-lg:w-[8rem] max-lg:h-[8rem]' />
        ) : (
          <IconAudio className='lg:w-[2.5rem] lg:h-[2.5rem] max-md:w-[10.67rem] max-md:h-[10.67rem] max-lg:w-[8rem] max-lg:h-[8rem]' />
        )}
      </div>
      <div
        id='overlay'
        className='absolute top-0 left-0 z-10 w-full h-0 opacity-50 bg-gradient-banner max-lg:h-full lg:rounded-[1rem] pointer-events-none'
      ></div>
    </>
  )
}
