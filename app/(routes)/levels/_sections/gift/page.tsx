'use client'
import React from 'react'
import { Accordion, DetailItem, Divider } from '@components'
import { SectionName } from '../components/SectionName'
import { ButtonList } from '../components/ButtonList'
import { TabSelector } from '../components/TabSelector'
import { useParams } from 'next/navigation'
import { UseLevelSectionData } from '@/app/_hooks'
import { LevelGiftType } from '@/app/_types'
import { Spinner } from '@/app/_assets/_icons'
import { SideBox } from '../../_components/SideBox/SideBox'


export default function page() {

    const { params } = useParams()

    const { data, isError } = UseLevelSectionData<LevelGiftType>(params[0], 'gift')


    if (data?.data.data) {

        const { description, designer, fbx_file, features, gif_file, has_animation, id, level_id,
            monthly_capacity_count, name, png_file, rent, sell, sell_capacity, seller_link, store_capacity, three_d_model_lines,
            three_d_model_points, three_d_model_volume, vod_document_registration
        } = data?.data?.data

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


                        <Accordion description={description} title={'توضیحات'} />

                        <Divider />

                        <Accordion description={features} title={'قابلیت های هدیه همراه'} />

                        <Divider />


                        <div className='grid grid-cols-2 gap-4 lg:gap-12'>

                            <div className={`flex gap-4 flex-col col-span-2 xl:col-span-1 `}>
                                <DetailItem title='تعداد ظرفیت ماهانه' value={`${monthly_capacity_count}`} />
                                <DetailItem title='حجم مدل سه بعدی هدیه' value={`${three_d_model_volume}`} />
                                <DetailItem title='تعداد پوینت های مدل هدیه همراه:' value={`${three_d_model_points}`} />
                                <DetailItem title='تعداد خطوط مدل هدیه همراه' value={`${three_d_model_lines}`} />
                                <DetailItem title='انیمیشن' value={!!has_animation} />
                                <DetailItem title='قابلیت ذخیره ظرفیت' value={!!store_capacity} />
                                <DetailItem title='فایل FBX هدیه' value={!!fbx_file} isLink />
                                <DetailItem title='قابلیت فروش ظرفیت' value={!!sell_capacity} />
                            </div>

                            <div className={`flex gap-4 flex-col col-span-2 xl:col-span-1 `}>
                                <DetailItem title='قابلیت فروش هدیه همراه' value={!!sell} />
                                <DetailItem title='قابلیت کرایه هدیه همراه' value={!!rent} />
                                <DetailItem title='لینک دسترسی به فروشندگان هدیه همراه' value={!!seller_link} />
                                <DetailItem title='طراح هدیه' value={!!designer} />
                                <DetailItem title='فایل PNG هدیه' value={!!png_file} />
                                <DetailItem title='فایل GIF هدیه' value={!!gif_file} />
                                <DetailItem title='نام' value={name} />

                            </div>


                            {/* {Object.values(giftInfo.items.reduce<{ [key: string]: Array<{ title: string, value: any, col: number, span?: number }> }>((pv, cv) => {
                                return ({ ...pv, [cv.colNumber]: [...(pv?.[cv.colNumber] ?? []), cv] })
                            }, {})).map((item, index) => <div key={index} className={`flex gap-4 flex-col ${item.findIndex(i => i.span == 2) != -1 ? 'col-span-2' : 'col-span-2 xl:col-span-1'}  `}>
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
