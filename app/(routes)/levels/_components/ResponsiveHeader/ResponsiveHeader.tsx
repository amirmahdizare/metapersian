'use client'
import { Menu } from '@assets/_icons'
import React from 'react'
import { SideMenu } from '../SideMenu/SideMenu'
import Image from 'next/image'
import logo from '@assets/_images/logo.png'
import underLine from '@assets/_images/titlePng.png'

export const ResponsiveHeader = ({ title }: { title: string }) => {
    return (
        <>
            <div className='flex flex-row gap-2 shadow-bottom justify-between lg:hidden items-center fixed top-0 right-0 w-full p-5  bg-dark-bg z-[50]'>
                <SideMenu isMobile />
                <div className='flex flex-row gap-4 items-center justify-center '>


                    <div className='flex flex-col gap-1 text-white text-xl'>
                        <span className='font-bold '>متارنگ</span>
                        <span className='text-gray-400'>متاورس رنگ</span>

                    </div>
                    <Image alt='logo' src={logo} width={40} height={40} />
                </div>
            </div>
            <div className='flex flex-col gap-3 text-dark-active-btn lg:hidden'>
                <span className='text-2xl  text-right flex-1 mr-2'>{title}</span>
                <Image src={underLine} alt='underline' width={145} height={6} />
            </div>
        </>
    )
}
