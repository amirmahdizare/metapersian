'use client'
import React, { useState } from 'react'

export const SelectTheme = () => {

    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    const defClassName = 'rounded-app-curve  flex-1 flex flex-row justify-center items-center gap-1 transition-all duration-200 cursor-pointer'
    
    return (
        <div className='bg-black p-1 rounded-app-curve flex flex-row'>
            <div className={`${defClassName} ${theme=='dark' ? 'bg-light-menu-bg' : ''}`} onClick={()=>setTheme('dark')}>تیره</div>
            <div className={`${defClassName} ${theme=='light' ? 'bg-light-menu-bg' : ''}`} onClick={()=>setTheme('light')}>روشن</div>

        </div>
    )
}
