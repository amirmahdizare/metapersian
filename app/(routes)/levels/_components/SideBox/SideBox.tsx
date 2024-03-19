'use client'

import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import png from '@images/bugguet/sample.png'
// import gifVideo from '../../../../public/sample.mp4'

import { Sample3D } from '@components'
import { useParams } from 'next/navigation'
import { UseLevelSectionData, UseLevelsData } from '@/app/_hooks'
import { Spinner } from '@/app/_assets/_icons'
import { BaseLevelSection, LevelSectionKey } from '@/app/_types'


type modes = 'gif' | 'fbx' | 'png'

export const SideBox = () => {

    const { params } = useParams()

    const slug = params[0]

    const section = params[1] as LevelSectionKey

    const { data, isError } = UseLevelsData()

    const { data: sectionData, } = UseLevelSectionData<BaseLevelSection>(slug,  section)

    const [mode, setMode] = useState<modes>('png')


    useEffect(() => {
        if (data?.data.data) {
            const selectedSlugData = data?.data?.data.find(d => d.id == slug)

            if (selectedSlugData?.png_file)
                return setMode('png')
            else if (selectedSlugData?.gif_file)
                return setMode('gif')
            else if (selectedSlugData?.fbx_file)
                return setMode('fbx')

            return
        }
    }, [data?.data?.data, slug])

    const CustomButton = useCallback(({ title, fieldKey }: { title: string, fieldKey: modes }) => <button
        className={`px-8 p-2 flex items-center justify-center flex-1 lg:flex-none rounded-app ${mode == fieldKey ? 'bg-dark-active-btn text-black' : 'bg-dark-on-bg text-gray-400'}`}
        onClick={() => setMode(fieldKey)}
    >
        {title}
    </button>, [mode])



    if (data?.data?.data) {

        const selectedSlugData = data?.data?.data.find(d => d.id == slug)

        const gifSrc = section == 'general-info' ? selectedSlugData?.gif_file : sectionData?.data?.data?.gif_file
        const pngSrc = section == 'general-info' ? selectedSlugData?.png_file : sectionData?.data?.data?.png_file
        const fbxSrc = section == 'general-info' ? selectedSlugData?.fbx_file : sectionData?.data?.data?.fbx_file

        if (gifSrc || pngSrc || fbxSrc)

            return (
                <div className='flex flex-col gap-6 justify-between'>

                    {gifSrc && <div className={`h-[400px] lg:h-[550px] relative ${mode == 'gif' ? '' : 'hidden'}`}><Image className='object-cover' alt='gif' src={gifSrc} fill /></div>}

                    {pngSrc && <div className={`h-[400px] lg:h-[550px] relative  ${mode == 'png' ? '' : 'hidden'}`}><Image className=' object-cover' alt='png' src={pngSrc} fill /></div>}

                    {fbxSrc && <div className={`h-[450px] lg:h-[550px] relative flex justify-center items-center ${mode == 'fbx' ? '' : 'hidden'}`}><Sample3D url={fbxSrc} /></div>}

                    <div className='flex flex-row justify-around lg:justify-center gap-8'>
                        {!!pngSrc && <CustomButton fieldKey='png' title='PNG' />}
                        {!!fbxSrc && <CustomButton fieldKey='fbx' title='FBX' />}
                        {!!gifSrc && <CustomButton fieldKey='gif' title='GIF' />}
                    </div>

                </div>
            )

        else
            return <></>
    }

    else if (isError)
        return <div className='h-16 w-full flex justify-center items-center text-red-500'>خطا در دریافت اطلاعات</div>

    return <div className='h-16 w-full flex justify-center items-center'><Spinner width={30} height={30} /></div>
}
