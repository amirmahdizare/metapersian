'use client'
import { Moon, Sun } from '@/app/_icons'
import React, { useState } from 'react'

export const SelectTheme = () => {

    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    const defClassName = 'rounded-app-curve  flex-1 flex flex-row justify-center items-center gap-2 align-middle transition-all duration-200 cursor-pointer'
    
    return (
        <div className='bg-black p-1 rounded-app-curve flex flex-row items-center gap-1 '>
            <div className={`${defClassName} ${theme=='dark' ? 'bg-dark-on-bg text-white' : ''}`} onClick={()=>setTheme('dark')}>
                <span>
                تیره
                </span>
                <Moon width={15} height={15}/>
             
            </div>
            <div className={`${defClassName} ${theme=='light' ? 'bg-dark-on-bg text-white' : ''}`} onClick={()=>setTheme('light')}>
                <span>روشن</span>
                <Sun width={15} height={15} />
            </div>

        </div>
    )
}
