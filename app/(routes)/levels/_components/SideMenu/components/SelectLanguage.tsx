import { ChevronUp, World } from '@assets/_icons'
import React from 'react'

export const SelectLanguage = ({ hideTitle }: { hideTitle: boolean }) => {
    return (
        <div className={`flex flex-row gap-2 items-center  hover:bg-black cursor-pointer  rounded-app ${!hideTitle ? 'justify-center aspect-square p-1' : 'justify-between p-2'}`}>

            <div className='flex flex-row gap-2 items-center'>
                <World width={20} height={20} />
                {hideTitle && <span>زبان</span>}
            </div>
            {hideTitle && <ChevronUp width={12} height={12} />}
        </div>
    )
}
