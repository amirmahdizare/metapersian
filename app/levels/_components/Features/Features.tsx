import Image from 'next/image'
import { features } from './data.mock'
import React from 'react'

export const Features = () => {
    return (
        // box-shadow: 2px 2px 20.700000762939453px 0px rgba(245, 245, 245, 0.3);

        <div className='flex flex-row gap-16 justify-around mt-16'>
            {features.map(item => <div className='flex flex-col  justify-center items-center gap-4 p-8 pt-20 rounded-app flex-1 bg-[#080807] duration-150 transition-all text-dark-Font top-0 hover:top-4 hover:border hover:border-yellow-500 hover:shadow-card  hov er:sha dow relative'>
                <div className=' w-[80px] lg:w-[120px] aspect-square rounded-app-curve bg-dark-on-bg p-2 text-center relati ve absolute -top-1/2 translate-y-1/2'>
                    <Image  src={item.img} alt={item.title} fill />
                </div>
                <span className='text-2xl font-bold'>{item.title}</span>
                <p className='text-center text-xl'>{item.description}</p>
            </div>)}

        </div>
    )
}
