import React from 'react'
import { Description } from './components/Description'
import { Logos } from './components/Logos/Logos'


export const Footer = () => {
    return (
        <div className='grid grid-cols-3 gap-6 rounded-app bg-dark-on-bg p-6'>

            <div className='col-span-3 lg:col-span-2'>
                <Description />
            </div>

            <div className='col-span-3 lg:col-span-1'>
                <Logos />
            </div>


        </div>
    )
}


