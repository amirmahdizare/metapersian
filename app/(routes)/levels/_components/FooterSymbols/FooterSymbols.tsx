import React from 'react'
import { footerSymbols } from './data.mock'
import Link from 'next/link'
import Image from 'next/image'

export const FooterSymbols = () => {
    return (
        <div className='grid  grid-cols-4 lg:flex flex-row lg:gap-2 gap-6 bg-dark-on-bg p-2 rounded-app flex-wrap justify-evenly w-full ' dir='ltr'>


            {footerSymbols.map(item => <Link key={item.link} href={item.link} className='aspect-square relative col-span-1 object-cover  lg:w-[40px] xl:w-[55px]'>
                <Image src={item.img} alt={item.link} className='object-cover w-full aspect-square' />
            </Link>)}

        </div>
    )
}
