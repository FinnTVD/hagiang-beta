'use client'

import { usePathname } from 'next/navigation'
import twitter from '../../public/images/twitter.svg'
import Image from 'next/image'

function TwitterShare() {
  const pathName = usePathname()
  const handleClick = () => {
    if (typeof window === 'undefined') return
    const twitterUrl =
      'https://twitter.com/share?url=' + encodeURIComponent('https://hagiangcheerstours.com' + pathName)
    window.open(twitterUrl, '_blank')
  }

  return (
    <button onClick={handleClick}>
      <Image
        src={twitter}
        alt='twitter'
        width={50}
        height={50}
        className='w-[6.4rem] h-[6.4rem] object-contain lg:w-[1.5rem] lg:h-[1.5rem] md:w-[3rem] md:h-[3rem]'
      />
    </button>
  )
}

export default TwitterShare
