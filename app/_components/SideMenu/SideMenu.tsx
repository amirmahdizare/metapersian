import React from 'react'
import logo from '@/app/_images/logo.png'
import Image from 'next/image'
import { routes } from './routes'
import { SelectTheme } from './components/SelectTheme'
import { SelectLanguage } from './components/SelectLanguage'
import { ChevronUp, Login } from '@/app/_icons'

export const SideMenu = () => {
  return (
    <div className='bg-dark-on-bg text-dark-tooltip p-5 rounded-app min-w-[300px] gap-4 flex flex-col'>

      <div className='flex flex-row justify-between items-center gap-2'>

        <div className='flex flex-row gap-4 items-center justify-center'>

          <Image alt='logo' src={logo} />

          <div className='flex flex-col gap-1'>
            <span className='font-bold text-white'>متارنگ</span>
            <span>متاورس رنگ</span>

          </div>
        </div>

        <div className='rounded-[50%] bg-black w-8 h-8 shrink-0 flex flex-row justify-center items-center cursor-pointer'>
          <ChevronUp className='rotate-90' width={12} height={12} />
        </div>

      </div>

      <div className='flex flex-col '>


        {routes.map(route => <div className='flex flex-row gap-2.5 items-center rounded-app hover:bg-black p-2 transition-all duration-200 cursor-pointer'>
          <Image src={route.img} height={35} width={27.5} alt={route.faTitle} />
          <span>{route.faTitle}</span>

        </div>)}

      </div>

      <SelectLanguage />

      <div className='bg-yellow-400 flex justify-between flex-row rounded-app p-2 px-4 items-center text-black'>
        <Login width={20} height={20} />

        <span>ورود</span>

      </div>

      <div className='bg-gray-600 w-full h-[1px]'></div>

      <SelectTheme />

    </div>
  )
}
