import { Check, Close } from '@assets/_icons'
import React from 'react'

export const DetailItem = ({ title, value }: { title: string, value: any }) => {

    const generateValue = () => {
        if (typeof value == 'boolean' && !value)
            return <Close width={14} height={14} className='text-red-500' />
        else if (typeof value == 'boolean' && value)
            return <Check width={14} height={14} className='text-green-500' />
        else
            return <span className='text-dark-tex-gray text-left text-ellipsis line-clamp-1 overflow-hidden' title={value}>{value}</span>


    }
    return (
        <div className='flex flex-row gap-2 justify-between p-3  border-b-4 border-[#1a1a18] items-center font-bold '>
            <span className='text-white'>{title} :</span>
            {generateValue()}
        </div>
    )
}
