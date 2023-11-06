'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'

import { cn } from '@/lib/utils'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(className)}
    {...props}
  />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className='flex'>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between py-[0.5rem] max-lg:py-[1.5rem] font-semibold transition-all [&[data-state=open]>svg]:rotate-180 max-md:text-[3.733rem] leading-[1.57] tracking-[0.00933rem] max-md:pt-[2rem] max-md:pb-[0.5rem] text-[0.875rem] max-lg:text-[1.875rem]',
        className,
        props?.index === 0 ? 'max-md:mt-[4.27rem]' : 'max-md:mt-[2.67rem]',
        props?.indextab === props?.index ? 'text-primary-70' : 'text-gray-scale-50',
      )}
      {...props}
    >
      {children}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='12'
        height='7'
        viewBox='0 0 12 7'
        fill='none'
        className='transition-all duration-300'
      >
        <path
          d='M6.00337 3.09381L2.83923 6.25781C2.67862 6.41858 2.48219 6.49878 2.24996 6.49878C2.01775 6.49878 1.82141 6.41856 1.66083 6.25781L1.17247 5.76961C1.01193 5.6091 0.93164 5.41264 0.93164 5.1805C0.93164 4.94836 1.01193 4.752 1.17247 4.59123L5.41084 0.346412C5.57145 0.185783 5.76785 0.105469 6.00011 0.105469C6.23236 0.105469 6.42861 0.185761 6.58928 0.346412L10.8277 4.59121C10.9883 4.75198 11.0686 4.94832 11.0686 5.18048C11.0686 5.41264 10.9883 5.60907 10.8277 5.76959L10.3394 6.25779C10.1789 6.41856 9.98356 6.49876 9.7534 6.49876C9.52342 6.49876 9.32592 6.41853 9.16101 6.25779L6.00337 3.09381Z'
          fill={props?.indexTab === props.index ? '#B34B1E' : '#727272'}
        />
      </svg>
      {/* <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                className='w-[1rem] h-[1rem] max-lg:w-[2rem] max-lg:h-[2vw] max-md:w-[4.5rem] max-md:h-[4.5rem] transition-all duration-300'
            >
                <path
                    d='M5.18137 2.33594V3.58565L11.4549 3.58565L2.33203 12.7085L3.21516 13.5916L12.3464 4.4771V10.7506H13.5961V2.33594L5.18137 2.33594Z'
                    fill={props?.indexTab === props.index ? '#B34B1E' : '#727272'}
                />
            </svg> */}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      'overflow-hidden text-[0.875rem] max-lg:text-[1.875rem] max-md:text-[3.733rem] transition-all leading-[1.57] tracking-[0.00219rem] text-gray-scale-50 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      className,
    )}
    {...props}
  >
    <div className='pt-0 pb-4'>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
