import Image from 'next/image'
import { features } from './data.mock'
import React from 'react'

export const Features = () => {
    return (
        <div className='flex flex-row gap-16 justify-around'>
            {features.map(item => <div className='flex flex-col  justify-center items-center gap-4 p-8 pt-16 rounded-app flex-1 bg-[#080807] duration-150 transition-all text-dark-Font top-0 hover:top-4 hover:border hover:border-yellow-500 hover:shadow relative'>
                <div className=' w-[80px] lg:w-[120px] aspect-square rounded-app-curve bg-dark-on-bg p-2 text-center relative'>
                    <Image  src={item.img} alt={item.title} fill />
                </div>
                <span className='text-2xl font-bold'>{item.title}</span>
                <p className='text-center'>{item.description}</p>
            </div>)}

        </div>
    )
}
