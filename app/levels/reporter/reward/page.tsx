import React from 'react'
import { Detailtem } from '@/app/_components/Detailtem/Detailtem'
import { rewards } from './data.mock'

export default function page() {
    return (
        <div className='grid grid-cols-2 grid-rows-2 gap-2'>


            {rewards.items.sort((a, b) => (a?.colNumber ?? 0) > (b?.colNumber ?? 0) ? -1 : 1).map(item => <div className={`col-span-2 lg:col-span-1 `}>
                <Detailtem {...item} />
            </div>)}

        </div>
    )
}
