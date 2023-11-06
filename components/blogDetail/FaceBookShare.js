'use client'

import { usePathname } from 'next/navigation'
import facebook from '../../public/images/facebookBlog.svg'
import Image from 'next/image'

function FaceBookShare() {
  const pathName = usePathname()
  const handleClick = () => {
    if (typeof window === 'undefined') return
    const facebookUrl =
      'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent('https://hagiangcheerstours.com' + pathName)
    window.open(facebookUrl, '_blank')
  }

  return (
    <button onClick={handleClick}>
      <Image
        src={facebook}
        alt='fb'
        width={50}
        height={50}
        className='w-[6.4rem] h-[6.4rem] object-contain lg:w-[1.5rem] lg:h-[1.5rem] md:w-[3rem] md:h-[3rem]'
      />
    </button>
  )
}

export default FaceBookShare
