import Link from 'next/link'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card'

export function PopupNav({ children, allTourHG }) {
  return (
    <HoverCard openDelay={100}>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className='flex flex-col w-fit'>
        {Array.isArray(allTourHG?.nodes) &&
          allTourHG?.nodes?.map((e, index) => (
            <Link
              key={index}
              href={e?.slug ? '/tour/' + e?.slug : '/'}
              className='py-[0.3rem] relative hover:text-primary-70 transition-all duration-200'
            >
              {e?.title}
            </Link>
          ))}
      </HoverCardContent>
    </HoverCard>
  )
}
