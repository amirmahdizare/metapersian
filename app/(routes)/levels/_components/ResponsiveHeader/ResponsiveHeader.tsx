import { Menu } from '@assets/_icons'
import React from 'react'
import { SideMenu } from '../SideMenu/SideMenu'

export const ResponsiveHeader = ({ title }: { title: string }) => {
    return (
        <div className='flex flex-row gap-2 justify-between lg:hidden items-start'>
            <SideMenu isMobile />
            <span className='text-2xl text-white text-left flex-1'>{title}</span>
        </div>
    )
}
