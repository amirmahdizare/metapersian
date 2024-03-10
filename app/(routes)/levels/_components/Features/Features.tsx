import Image from 'next/image'
import React from 'react'
import { features } from './data.mock'

export const Features = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-24 lg:gap-16 lg:items-start justify-around mt-12 lg:mt-24 mb-7  lg:h-72'>
            {features.map(item => <div key={item.title} className='flex flex-col  justify-center items-center gap-4 p-8 lg:pt-24 pt-28 rounded-app flex-1 bg-[#080807] duration-300 transition-all text-dark-Font top-0  hover:pb-12 hover:pt-32 border border-black hover:border-yellow-500 hover:shadow-card [&_.image]:hover:lg:w-[130px] [&_.image]:hover:lg:h-[130px]  relative'>
                <div className='image w-[80px] duration-300 transition-all h-[80px] lg:w-[100px] lg:h-[100px]  box-content aspect-square rounded-app-curve shrink-0 bg-dark-on-bg p-4  text-center  relati ve absolute -top-1/2 translate-y-1/2 '>
                    <Image  src={item.img} alt={item.title} className=''  />
                </div>
                <span className='text-2xl font-bold'>{item.title}</span>
                <p className='text-center text-xl lg:h-20'>{item.description}</p>
            </div>)}

        </div>
    )
}
