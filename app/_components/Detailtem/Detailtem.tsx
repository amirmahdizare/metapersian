import { Check, Close } from '@/app/_icons'
import React from 'react'

export const Detailtem = ({ title, value }: { title: string, value: any }) => {

    const generateValue = () => {
        if (typeof value == 'boolean' && !value)
            return <Close width={25} height={25} />
        else if (typeof value == 'boolean' && value)
            return <Check width={25} height={25} />
        else
            return <span className='text-dark-tex-gray'>{value}</span>


    }
    return (
        <div className='flex flex-row gap-2 justify-between p-2 border-b-4 border-b-dark-on-bg'>
            <span className='text-white'>{title}</span>
            {generateValue()}
        </div>
    )
}
