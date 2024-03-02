import React from 'react'
import { persmissionData } from './data.mock'
import { Detailtem } from '@/app/_components/Detailtem/Detailtem'

export default function page() {
    return (
        <div className='grid grid-cols-2 grid-rows-2 gap-2'>


            {persmissionData.items.sort((a, b) => (a?.colNumber ?? 0) > (b?.colNumber ?? 0) ? -1 : 1).map(item => <div className={`col-span-2 lg:col-span-1 `}>
                <Detailtem {...item} />
            </div>)}

        </div>
    )
}
