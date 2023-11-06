'use client'
import { useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion'

export function AccordionDemo({ className='', data }) {
    const [indexTab, setIndexTab] = useState(-1)
    return (
        <Accordion
            type='single'
            collapsible
            className={`${className} w-full`}
        >
            {data ? (
                <>
                    {data?.map((e, index) => (
                        <AccordionItem
                            key={index}
                            value={`value-${index + 1}`}
                        >
                            <AccordionTrigger
                                indextab={indexTab}
                                className={`${index===indexTab?'border-[#B34B1E] mb-[2rem]':''} border-b `}
                                onClick={() => {
                                    if (index === indexTab) {
                                        setIndexTab(-1)
                                    } else {
                                        setIndexTab(index)
                                    }
                                }}
                                index={index}
                            >
                                {e?.heading}
                            </AccordionTrigger>
                            <AccordionContent index={index} >{e?.description}</AccordionContent>
                        </AccordionItem>
                    ))}
                </>
            ) : (
                <>
                    <AccordionItem value='item-1'>
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value='item-2'>
                        <AccordionTrigger>Is it styled?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It comes with default styles that matches the other components&apos; aesthetic.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value='item-3'>
                        <AccordionTrigger>Is it animated?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It&apos;s animated by default, but you can disable it if you prefer.
                        </AccordionContent>
                    </AccordionItem>
                </>
            )}
        </Accordion>
    )
}
