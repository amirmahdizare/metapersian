'use client'
import React from 'react'
import { Accordion, DetailItem, Divider } from '@components'
import { SectionName } from '../components/SectionName'
import { ButtonList } from '../components/ButtonList'
import { TabSelector } from '../components/TabSelector'
import { useParams } from 'next/navigation'
import { UseLevelSectionData } from '@/app/_hooks'
import { LevelGemType, LevelLicenceType } from '@/app/_types'
import { Spinner } from '@/app/_assets/_icons'
import { PopUpDescription } from '../../_components/PopUpDescription/PopUpDescription'
import { SideBox } from '../../_components/SideBox/SideBox'


export default function page() {

    const { params } = useParams()

    const { data, isError } = UseLevelSectionData<LevelGemType>(params[0], 'gem')


    if (data?.data.data) {


        const { color, description, designer, encryption, fbx_file, has_animation, id, level_id, lines, name, png_file, points, thread, volume } = data.data.data

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
                            <span className='text-white'>توضیحات:</span>

                            <p className='text-gray-300 leading-9' dangerouslySetInnerHTML={{ __html: description }} />

                        </div>

                        <PopUpDescription description={description} >
                            <ButtonList />
                        </PopUpDescription>

                        <div className='grid grid-cols-2 gap-4 lg:gap-12'>

                            <div className={`flex flex-col gap-4 col-span-2 xl:col-span-1  `}>
                                <DetailItem title='تراشه نگین' value={name} />
                                <DetailItem title='حجم مدل سه بعدی سنگ' value={volume} />
                                <DetailItem title='تعداد پوینت های مدل سه بعدی سنگ' value={points} />
                                <DetailItem title='تعداد خطوط های مدل سه بعدی سنگ' value={lines} />
                                <DetailItem title='انیمیشن' value={!!has_animation} />
                            </div>

                            <div className={`flex flex-col gap-4 col-span-2 xl:col-span-1  `}>
                                <DetailItem title='رنگ نگین' value={color} />
                                <DetailItem title='فایل PNG نگین' value={png_file} isLink />
                                <DetailItem title='فایل FBX نگین' value={fbx_file} isLink />
                                <DetailItem title='رمز نگاری مرکزی' value={encryption} />
                                <DetailItem title='طراح نگین' value={designer} />

                            </div>

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
        return <div className='h-28 w-full flex justify-center items-center'>خطا در دریافت اطلاعات</div>

    return <div className='h-28 w-full flex justify-center items-center'><Spinner width={30} height={30} /></div>

}
