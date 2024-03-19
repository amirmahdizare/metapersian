'use client'
import React from 'react'
import { persmissionData } from './data.mock'
import { DetailItem } from '@components'
import { TabSelector } from '../components/TabSelector'
import { ButtonList } from '../components/ButtonList'
import { SectionName } from '../components/SectionName'
import { UseLevelSectionData } from '@/app/_hooks'
import { useParams } from 'next/navigation'
import { LevelLicenceType } from '@/app/_types'
import { Spinner } from '@/app/_assets/_icons'

export default function Page() {

    const { params } = useParams()

    const { data, isError } = UseLevelSectionData<LevelLicenceType>(params[0], 'licenses')


    if (data?.data.data) {

        const { access_to_answer_questions_unit, add_memeber_to_union, city_counsile_entry, create_challenge_questions, create_union, delete_image, establish_property_on_surface, establish_special_residential_property, gate_license, inter_level_general_points,
            inter_level_special_points, id, judge_entry, lawyer_license, level_id, observation_license, rent_out_satisfaction, upload_image, upload_music
        } = data?.data?.data

        return (
            <div className='grid grid-cols-3 gap-4 w-full'>
                <div className='bg-dark-section-color col-span-3 lg:col-span-2 rounded-app2  lg:p-4 lg:-ml-2'>


                    <div className=' col-span-3 lg:hidden order-1'><TabSelector /></div>

                    <div className='col-span-3 lg:col-span-2 flex flex-col gap-4 order-2'>

                        <div className='lg:flex flex-row gap-2 justify-between items-center hidden'>
                            <SectionName />
                            <ButtonList />
                        </div>

                        <div className='hidden lg:flex'><TabSelector /></div>

                        <div className='flex flex-col lg:flex-row gap-8 text-xl lg:justify-around'>



                            <div className={`flex flex-col gap-4 flex-1 `}>
                                <DetailItem title='مجوز تاسیس اتحاد' value={!!create_union} />
                                <DetailItem title='مجوز عضوگیری برای اتحاد' value={!!add_memeber_to_union} />
                                <DetailItem title='مجوز بازرسی' value={!!observation_license} />
                                <DetailItem title='مجوز تاسیس دروازه' value={!!gate_license} />
                                <DetailItem title='مجوز وکالت' value={!!lawyer_license} />
                                <DetailItem title='مجوز ورود به شورای شهر' value={!!city_counsile_entry} />
                                <DetailItem title='مجوز تاسیس ملک مسکونی ویژه' value={!!establish_special_residential_property} />
                                <DetailItem title='مجوز تاسیس ملک بر روی سطح' value={!!establish_property_on_surface} />
                                <DetailItem title='قابلیت ثبت موقعیت های ویژه سطح' value={!!inter_level_special_points} />
                            </div>


                            <div className={`flex flex-col gap-4 flex-1  `}>
                                <DetailItem title='قابلیت ثبت موقعیت های عمومی سطح' value={!!inter_level_general_points} />
                                <DetailItem title='دسترسی به بخش پاسخ دهی به سوالات شهروندان' value={!!access_to_answer_questions_unit} />
                                <DetailItem title='قابلیت طرح سوال در چالش سوالات' value={!!create_challenge_questions} />
                                <DetailItem title='قابلیت بارگزاری موزیک در لیست انتظار' value={!!upload_music} />
                                <DetailItem title='قابلیت کرایه واحد رضایت' value={!!rent_out_satisfaction} />
                                <DetailItem title='قابلیت ورود به قضاوت' value={!!judge_entry} />
                                <DetailItem title='قابلیت بارگزاری تصاویر آزاد' value={!!upload_image} />
                                <DetailItem title='قابلیت حذف تصاویر آزاد' value={!!delete_image} />
                            </div>
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
