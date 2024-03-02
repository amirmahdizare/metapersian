import React from 'react'

export const Detailtem = ({ title, value }: { title: string, value: string }) => {
    return (
        <div className='flex flex-row gap-2 justify-between p-2 border-b-4 border-b-dark-on-bg'>
            <span className='text-white'>{title}</span>
            <span className='text-dark-tex-gray'>{value}</span>
        </div>
    )
}
