'use client'

import { usePathname } from 'next/navigation'
import linkdin from '../../public/images/linkedinBlog.svg'
import Image from 'next/image'

function LinkedInShare() {
  const pathName = usePathname()
  const handleClick = () => {
    if (typeof window === 'undefined') return
    const linkedInUrl =
      'https://www.linkedin.com/sharing/share-offsite/?url=' +
      encodeURIComponent('https://hagiangcheerstours.com' + pathName)
    window.open(linkedInUrl, '_blank')
  }

  return (
    <button onClick={handleClick}>
      <Image
        src={linkdin}
        alt='linkdin'
        width={50}
        height={50}
        className='w-[6.4rem] h-[6.4rem] object-contain lg:w-[1.5rem] lg:h-[1.5rem] md:w-[3rem] md:h-[3rem]'
      />
    </button>
  )
}

export default LinkedInShare
