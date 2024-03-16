'use client'

import React from 'react'
import { DetailItem } from '@components'
import { ButtonList } from '../components/ButtonList'
import { TabSelector } from '../components/TabSelector'
import { SectionName } from '../components/SectionName'
import { useParams } from 'next/navigation'
import { UseLevelSectionData } from '@/app/_hooks'
import {  LevelPricesType } from '@/app/_types'
import { Spinner } from '@/app/_assets/_icons'

export default function page() {

    const { params } = useParams()

    const { data, isError } = UseLevelSectionData<LevelPricesType>(params[0], 'prize')


    if (data?.data.data) {

        const { blue, effect, id, level_id, psc, red, satisfaction, yellow } = data?.data?.data

        return (
            <div className='grid grid-cols-2 gap-4 rounded-app2 bg-dark-section-color p-4 lg:min-w-[900px] '>

                <div className=' col-span-3 lg:hidden order-1'><TabSelector /></div>

                <div className='col-span-3 lg:col-span-2 flex flex-col gap-4 order-2'>

                    <div className='lg:flex flex-row gap-2 justify-between items-center hidden'>
                        <SectionName />
                        <ButtonList />
                    </div>

                    <div className='hidden lg:flex'><TabSelector /></div>

                    <div className='flex flex-col lg:flex-row gap-4 text-xl justify-evenly'>

                        <div className={`flex flex-col gap-4 col-span-2 xl:col-span-1  flex-1`}>
                            <DetailItem title='دریافت PSC' value={psc} />
                            <DetailItem title='دریافت رنگ آبی' value={blue} />
                            <DetailItem title='دریافت رنگ زرد' value={yellow} />
                        </div>

                        <div className={`flex flex-col gap-4 col-span-2 xl:col-span-1  flex-1`}>
                            <DetailItem title='دریافت رنگ قرمز' value={red} />
                            <DetailItem title='واحد رضایت' value={satisfaction} />
                            <DetailItem title='اثر' value={effect} />
                        </div>

                    </div>
                </div>


            </div>
        )

    }
    else if (isError)
        return <div className='h-28 w-full flex justify-center items-center text-red-500'>خطا در دریافت اطلاعات</div>

    return <div className='h-28 w-full flex justify-center items-center'><Spinner width={30} height={30} /></div>
}
