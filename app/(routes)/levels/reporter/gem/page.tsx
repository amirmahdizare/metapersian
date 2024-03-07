import React from 'react'
import { Accordion, DetailItem, Divider } from '@components'
import { gemInfo } from './data.mock'
import { ReporterName } from '../components/ReporterName'
import { ButtonList } from '../components/ButtonList'
import { TabSelector } from '../components/TabSelector'
import { SideBox } from './SideBox'


export default function page() {
    return (

        <div className='grid grid-cols-3 gap-4 rounded-app2 bg-dark-section-color p-4'>

            <div className=' col-span-3 lg:hidden order-1'><TabSelector /></div>

            <div className='col-span-3 lg:col-span-2 flex flex-col gap-4 order-2'>

                <div className='lg:flex flex-row gap-2 justify-between items-center hidden'>
                    <ReporterName />
                    <ButtonList />
                </div>

                <div className='hidden lg:flex'><TabSelector /></div>

                <div className='flex flex-col gap-4 text-xl'>

                    {gemInfo.accordionItems.map(item => <>
                        <Accordion description={item.desc} title={item.title} />
                        <Divider /></>)}


                    <div className='grid grid-cols-2 gap-2'>
                        {Object.values(gemInfo.items.reduce<{ [key: string]: Array<{ title: string, value: any, col: number, span?: number }> }>((pv, cv) => {
                            return ({ ...pv, [cv.colNumber]: [...(pv?.[cv.colNumber] ?? []), cv] })
                        }, {})).map(item => <div className={`flex flex-col ${item.findIndex(i => i.span == 2) != -1 ? 'col-span-2' : 'col-span-2 lg:col-span-1'}  `}>
                            {item?.map(i => <DetailItem {...i} />)}
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