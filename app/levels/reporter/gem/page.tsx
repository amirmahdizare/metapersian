import React from 'react'
import { Accordion, DetailItem, Divider } from '@/app/_components'
import { gemInfo } from './data.mock'


export default function page() {
    return (

        <div className='flex flex-col gap-4 text-xl'>
            <span className='text-white'>توضیحات:</span>

            <p className='text-gray-300 leading-8'>
                {gemInfo.description}
            </p>


            <Divider />

            {gemInfo.accordionItems.map(item => <>
                <Accordion description={item.desc} title={item.title} />
                <Divider /></>)}

            <div className='grid grid-cols-2 grid-rows-2 gap-2'>


                {gemInfo.items.sort((a, b) => (a?.colNumber ?? 0) > (b?.colNumber ?? 0) ? -1 : 1).map(item => <div className={`col-span-2 lg:col-span-1 `}>
                    <DetailItem {...item} />
                </div>)}

            </div>
        </div>
    )
}
