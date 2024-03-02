'use client'
import React, { useState } from 'react'
import { ChevronUp } from '@/app/_icons'

export const Accordion = ({ title, description }: { title: string, description: string }) => {

    const [open, setOpen] = useState<boolean>(false)

    return (
        <div className={`flex flex-col transition-all duration-300 ${open ? 'gap-4' : 'gap-0'}`}>

            <div className='flex flex-row gap-3 items-center cursor-pointer text-white' onClick={() => setOpen(!open)}>
                <span>{title}</span>
                <ChevronUp width={12} height={12} className={` transition-all duration-300 ${open ? 'rotate-180' : ''}`} />
            </div>

            <div className={` transition-all duration-300 text-dark-tex-gray ${open ? 'max-h-[1000px] opacity-1' : 'max-h-0 overflow-hidden opacity-0'}`}>
                {description}
            </div>



        </div>
    )
}
