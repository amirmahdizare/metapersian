import React from 'react'
import { infoData } from './data.mock'
import { DetailItem } from '@components'
import { TabSelector } from '../components/TabSelector'
import { ButtonList } from '../components/ButtonList'
import { SideBox } from './SideBox'
import { ReporterName } from '../components/ReporterName'
import { PopUpDescription } from '../../_components/PopUpDescription/PopUpDescription'

export default function page() {


    return (
        <div className='grid grid-cols-3 gap-6 rounded-app2 bg-dark-section-color lg:p-4'>

            <div className=' col-span-3 lg:hidden order-1'><TabSelector /></div>

            <div className='col-span-3 lg:col-span-2 flex flex-col gap-4 order-2'>

                <div className='lg:flex flex-row gap-2 justify-between items-center hidden'>
                    <ReporterName />
                    <ButtonList />
                </div>

                <div className='hidden lg:flex'><TabSelector /></div>

                <div className='flex flex-col gap-4 text-xl'>

                    <div className='lg:flex flex-col gap-2 hidden'>
                        <span className='text-white'>توضیحات:</span>

                        <p className='text-gray-300 leading-9'>
                            {infoData.desc}
                        </p>
                    </div>

                    <PopUpDescription description={infoData.desc} >
                        <ButtonList/>
                    </PopUpDescription>


                    <div className='w-full bg-dark-on-bg h-1'></div>
                    <div className='grid grid-cols-2 gap-4 lg:gap-4'>
                        {Object.values(infoData.items.reduce<{ [key: string]: Array<{ title: string, value: any, col: number, span?: number }> }>((pv, cv) => {
                            return ({ ...pv, [cv.col]: [...(pv?.[cv.col] ?? []), cv] })
                        }, {})).map((item ,index) => <div key={index} className={`flex flex-col gap-4 ${item.findIndex(i => i.span == 2) != -1 ? 'col-span-2 ' : 'col-span-2 lg:col-span-1 '}  `}>
                            {item?.map(i => <DetailItem key={i.title} {...i} />)}
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
