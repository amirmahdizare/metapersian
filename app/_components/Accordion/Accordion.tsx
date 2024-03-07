'use client'
import React, { useState } from 'react'
import { ChevronUp } from '@assets/_icons'

export const Accordion = ({ title, description, items }: { title: string, description: string, items?: Array<{ title: string, description: string }> }) => {

    const [open, setOpen] = useState<boolean>(false)

    return (
        <div className={`flex flex-col transition-all duration-300 ${open ? 'gap-4' : 'gap-0'}`}>

            <div className='flex flex-row gap-3 items-center cursor-pointer text-white' onClick={() => setOpen(!open)}>
                <span>{title}</span>
                <ChevronUp width={12} height={12} className={` transition-all duration-300 ${open ? 'rotate-180' : ''}`} />
            </div>

            <div className={` transition-all flex flex-col gap-6 duration-300 text-dark-tex-gray ${open ? 'max-h-[1000px] opacity-1' : 'max-h-0 overflow-hidden opacity-0'}`}>
                <p className='font-light'>{description}</p>
                {items?.map(item => <p key={item.title} className='inline' >
                    <span className='font-bold text-white inline'>{item.title} : </span>
                    <p className='text-dark-tex-gray inline font-light'>{item.description}</p>
                </p>)}
            </div>



        </div>
    )
}
