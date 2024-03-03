import React from 'react'
import { Description } from './components/Description'
// import '' from ''


export const Footer = () => {
    return (
        <div className='grid grid-cols-3'>

            <div className='col-span-3 lg:col-span-2'>
                <Description />
            </div>

            <div className='col-span-3 lg:col-span-1'>

            </div>


        </div>
    )
}


