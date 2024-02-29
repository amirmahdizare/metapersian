'use client'
import { Moon, Sun } from '@/app/_icons'
import React, { useState } from 'react'

export const SelectTheme = ({ hideTitle }: { hideTitle: boolean }) => {

    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    const defClassName = 'rounded-app-curve  flex-1 flex flex-row justify-center items-center gap-2 p-1.5 align-middle transition-all duration-200 cursor-pointer'

    return (
        <div className='bg-black p-1 rounded-app-curve flex flex-row items-center gap-1 '>
            <div className={`${defClassName} ${!hideTitle && theme=='light' ? 'hidden' : 'aspe ct-square'}  ${theme == 'dark' ? 'bg-dark-on-bg text-white' : ''}`} onClick={() => setTheme('dark')}>
                {hideTitle && <span>تیره </span>}
                <Moon width={15} height={15} />
            </div>

            <div className={`${defClassName} ${!hideTitle && theme=='dark' ? 'hidden' : 'aspe ct-square'}  ${theme == 'light' ? 'bg-dark-on-bg text-white' : ''}`} onClick={() => setTheme('light')}>
                {hideTitle && <span>روشن</span>}
                <Sun width={15} height={15} />
            </div>

        </div>
    )
}
