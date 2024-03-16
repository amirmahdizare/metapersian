'use client'

import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import png from '@images/bugguet/sample.png'
// import gifVideo from '../../../../public/sample.mp4'

import { Sample3D } from '@components'


type modes = 'gif' | 'fbx' | 'png'

export const SideBox = () => {

    const [mode, setMode] = useState<modes>('png')

    const CustomButton = useCallback(({ title, fieldKey }: { title: string, fieldKey: modes }) => <button
        className={`px-8 p-2 flex items-center justify-center flex-1 lg:flex-none rounded-app ${mode == fieldKey ? 'bg-dark-active-btn text-black' : 'bg-dark-on-bg text-gray-400'}`}
        onClick={() => setMode(fieldKey)}
    >
        {title}
    </button>, [mode])


    return (
        <div className='flex flex-col gap-6 justify-between '>

            {mode == 'gif' && <video controls={false} loop autoPlay className='bg-black rounded-app'>
                <source src={'../../../../sample.mp4'} type='video/mp4' />
            </video>}

            {mode == 'png' && <Image alt='PNG' src={png}  className='bg-black rounded-app'/>}


            {mode == 'fbx' && <div className=' w-full h-[500px] flex justify-center items-center  rounded-app'><Sample3D /></div>}

            <div className='flex flex-row justify-around lg:justify-center gap-8'>
                <CustomButton fieldKey='png' title='PNG' />
                <CustomButton fieldKey='fbx' title='FBX' />
                <CustomButton fieldKey='gif' title='GIF' />
            </div>

        </div>
    )
}