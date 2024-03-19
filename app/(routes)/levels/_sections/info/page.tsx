'use client'
import React from 'react'
import { infoData } from './data.mock'
import { Accordion, DetailItem } from '@components'
import { TabSelector } from '../components/TabSelector'
import { ButtonList } from '../components/ButtonList'
import { SideBox } from '../../_components/SideBox/SideBox'
import { SectionName } from '../components/SectionName'
import { PopUpDescription } from '../../_components/PopUpDescription/PopUpDescription'
import Head from 'next/head'
import { UseLevelSectionData } from '@/app/_hooks'
import { useParams } from 'next/navigation'
import { LeveLInfoType } from '@/app/_types'
import { Spinner } from '@/app/_assets/_icons'



export default function Page() {

    const { params } = useParams()

    const { data, isError } = UseLevelSectionData<LeveLInfoType>(params[0], 'general-info')

    if (data?.data?.data) {

        const { score, rank, creation_date, description, designer, english_font, file_volume, has_animation, id, lines, model_designer, persian_font, points, subcategories, used_colors } = data?.data?.data

        return (

            <div className='grid grid-cols-3 gap-6 rounded-app2 bg-dark-section-color lg:p-4'>

                <div className=' col-span-3 lg:hidden order-1'><TabSelector /></div>

                <div className='col-span-3 lg:col-span-2 flex flex-col gap-4 order-2'>

                    <div className='lg:flex flex-row gap-2 justify-between items-center hidden'>
                        <SectionName />
                        <ButtonList />
                    </div>

                    <div className='hidden lg:flex'><TabSelector /></div>

                    <div className='flex flex-col gap-4 text-xl'>

                        <div className='lg:flex flex-col gap-2 hidden'>
                            <Accordion description={description} title={'توضیحات'} />
                        </div>

                        <PopUpDescription description={description} >
                            <ButtonList />
                        </PopUpDescription>


                        <div className='w-full bg-dark-on-bg h-1'></div>
                        <div className='grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-4'>
                            <div className={`flex flex-col gap-4 col-span-2 xl:col-span-1  `}>
                                <DetailItem title='امتیاز مورد نیاز' value={score.toLocaleString()} />
                                <DetailItem title='رتبه سطح' value={rank.toLocaleString()} />
                                <DetailItem title='تعداد زیر شاخه' value={subcategories.toLocaleString()} />
                                <DetailItem title='تاریخ ایجاد سطخ' value={creation_date} />
                                <DetailItem title='فونت مورد استفاده فارسی' value={persian_font} />
                                <DetailItem title='فونت مورد استفاده انگلیسی' value={english_font} />
                            </div>


                            <div className={`flex flex-col gap-4 col-span-2 xl:col-span-1  `}>
                                <DetailItem title='حجم فایل مدل سطح' value={file_volume.toLocaleString()} />
                                <DetailItem title='تعداد پوینت استفاده شده در مدل سطح' value={points.toLocaleString()} />
                                <DetailItem title='تعداد خطوط مدل سطح' value={lines.toLocaleString()} />
                                <DetailItem title='انیمیشن' value={!!has_animation} />
                                <DetailItem title='طراح سطح' value={designer} />
                                <DetailItem title='طراح مدل سه بعدی' value={model_designer} />

                            </div>

                            <div className={`flex flex-col gap-4 col-span-2  `}>
                                <DetailItem title='رنگ های مورد استفاده' value={used_colors} />

                            </div>
                            {/* {Object.values(infoData.items.reduce<{ [key: string]: Array<{ title: string, value: any, col: number, span?: number }> }>((pv, cv) => {
                                return ({ ...pv, [cv.col]: [...(pv?.[cv.col] ?? []), cv] })
                            }, {})).map((item, index) => <div key={index} className={`flex flex-col gap-4 ${item.findIndex(i => i.span == 2) != -1 ? 'col-span-2 ' : 'col-span-2 xl:col-span-1 '}  `}>
                                {item?.map(i => <DetailItem key={i.title} {...i} />)}
                            </div>)} */}

                        </div>
                    </div>
                </div>

                <div className='lg:order-3 order-1 col-span-3 lg:col-span-1 flex flex-col gap-2'>
                    <SideBox />
                </div>
            </div>
        )

    }
    else if (isError)
        return <div className='h-28 w-full flex justify-center items-center text-red-500'>خطا در دریافت اطلاعات</div>

    return <div className='h-28 w-full flex justify-center items-center'><Spinner width={30} height={30} /></div>
}
