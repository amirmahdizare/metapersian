import { ChevronUp, World } from '@/app/_icons'
import React from 'react'

export const SelectLanguage = () => {
    return (
        <div className='flex flex-row gap-2 items-center justify-between hover:bg-black cursor-pointer p-2 rounded-app'>

            <div className='flex flex-row gap-2 items-center'>
                <World width={20} height={20} />
                <span>زبان</span>
            </div>
            <ChevronUp  width={12} height={12}/>
        </div>
    )
}
