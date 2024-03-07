import React from 'react'
import { logos } from './data.mock'
import Image from 'next/image'
import Link from 'next/link'

export const Logos = () => {
    return (
        <div className='flex flex-col gap-5'>
            <span className='text-center text-white text-xl'>به شبکه های ما ملحق شوید.</span>
            <div className='grid grid-cols-5 gap-4' dir='ltr'>
                {logos.map(item => <Link key={item.img.src} href={item.link} className='col-span-1 aspect-square relative'>
                    <Image src={item.img} alt='' fill />
                </Link>)}
            </div>
        </div>
    )
}
