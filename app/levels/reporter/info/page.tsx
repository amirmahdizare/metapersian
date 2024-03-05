import React from 'react'
import { infoData } from './data.mock'
import { DetailItem } from '@/app/_components'
import { TabSelector } from '../components/TabSelector'
import { ButtonList } from '../components/ButtonList'
import { SideBox } from './SideBox'
import { ReporterName } from '../components/ReporterName'

export default function page() {
    return (
        <div className='grid grid-cols-3 gap-4 rounded-app bg-dark-section-color p-4'>

            <div className=' col-span-3 lg:hidden order-1'><TabSelector /></div>

            <div className='col-span-3 lg:col-span-2 flex flex-col gap-4 order-2'>

                <div className='lg:flex flex-row gap-2 justify-between items-center hidden'>
                    <ReporterName />
                    <ButtonList />
                </div>

                <div className='hidden lg:flex'><TabSelector /></div>

                <div className='flex flex-col gap-4 text-xl'>


                    <span className='text-white'>توضیحات:</span>

                    <p className='text-gray-300 leading-8'>
                        {infoData.desc}
                    </p>


                    <div className='w-full bg-dark-on-bg h-1'></div>
                    <div className='grid grid-row-2 gap-2'>


                        {infoData.items.sort((a, b) => (a?.span ?? 0) > (b?.span ?? 0) ? 1 : -1).map(item => <div className={`${item.span == 2 ? 'col-span-2' : 'col-span-2 lg:col-span-1'} `}>
                            <DetailItem {...item} />
                        </div>)}

                    </div>
                </div>
            </div>

            <div className='lg:order-3 order-1 col-span-3 lg:col-span-1 flex flex-col gap-2'>
                <SideBox />
            </div>
        </div>
    )
}
