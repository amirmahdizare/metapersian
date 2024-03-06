import React from 'react'
import { footerSymbols } from './data.mock'
import Link from 'next/link'
import Image from 'next/image'

export const FooterSymbols = () => {
    return (
        <div className='flex flex-row gap-4 bg-dark-on-bg p-2 rounded-app flex-wrap justify-evenly w-full'>


            {footerSymbols.reverse().map(item => <Link href={item.link} className='aspect-square relative  w-[30px] lg:w-[55px]'>
                <Image src={item.img} alt={item.link}  />
            </Link>)}

        </div>
    )
}
