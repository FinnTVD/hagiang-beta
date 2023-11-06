'use client'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import dynamic from 'next/dynamic'

const BookingOnlineV2 = dynamic(() => import('../homepage/BookingOnlineV2'), { ssr: false })

export function PopupBookNow({ children, allTourHG, tour }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='w-[90rem] max-w-[90rem] lg:w-[90rem] lg:max-w-[90rem] md:w-[95rem] md:max-w-[95rem] max-lg:h-[90vh] h-fit max-md:h-[80vh] max-lg:overflow-y-scroll max-md:rounded-[2.13rem] z-[999]'>
        <BookingOnlineV2
          allTourHG={allTourHG}
          tour={tour}
        />
      </DialogContent>
    </Dialog>
  )
}
