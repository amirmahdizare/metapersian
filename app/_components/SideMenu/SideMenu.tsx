'use client'
import React, { useState } from 'react'
import logo from '@/app/_images/logo.png'
import Image from 'next/image'

import { routes } from './routes'
import { SelectTheme } from './components/SelectTheme'
import { SelectLanguage } from './components/SelectLanguage'
import { ChevronUp, Login } from '@/app/_icons'

export const SideMenu = () => {

  const [expaned, setExpanded] = useState<boolean>(false)

  return (
    <div className={`bg-dark-on-bg text-dark-tooltip  rounded-app relative gap-4 flex transition-all duration-400 flex-col  ${expaned ? 'min- w -[300px] max-w-[10000px] p-5 ' : 'max-w-[60px] lg:max-w-[100px] overflow-hidden p-5 justify-center items-center'}`}>

      <div className='flex flex-row justify-between items-center gap-2'>

        <div className='flex flex-row gap-4 items-center justify-center'>

          <Image alt='logo' src={logo} />

          {expaned && <div className='flex flex-col gap-1'>
            <span className='font-bold text-white'>متارنگ</span>
            <span>متاورس رنگ</span>

          </div>}
        </div>

        <div className={`rounded-[50%]  w-8 h-8 shrink-0 flex flex-row justify-center items-center cursor-pointer text-dark-Font ${expaned ? 'bg-black' : 'fixed right-[90px] top-8 z-40 bg-dark-on-bg'}`} onClick={() => setExpanded(!expaned)}>
          <ChevronUp className={`rotate-90 `} width={12} height={12} />
        </div>

      </div>

      <div className='flex flex-col h-fit '>


        {routes.map(route => <div className={`flex flex-row gap-2.5  items-center rounded-app hover:bg-black   transition-all duration-200 cursor-pointer p-2.5  `}>
          <Image src={route.img} height={35} width={27.5} alt={route.faTitle}  />
          {expaned && <span>{route.faTitle}</span>}

        </div>)}

      </div>

      <SelectLanguage hideTitle={expaned} />

      <div className={`bg-yellow-400 flex justify-between shrink-0 flex-row rounded-app  items-center text-black ${!expaned ? 'aspect-square p-2' : ' p-2 px-4'} `}>
        <Login width={20} height={20} />

        {expaned && <span>ورود</span>}

      </div>

      <div className='bg-gray-600 w-full h-[1px]'></div>

      <SelectTheme hideTitle={expaned} />

    </div>
  )
}
