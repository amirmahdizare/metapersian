'use client'
import React, { useState } from 'react'
import logo from '@assets/_images/logo.png'
import Image from 'next/image'

import { routes } from './routes'
import { SelectTheme } from './components/SelectTheme'
import { SelectLanguage } from './components/SelectLanguage'
import { ChevronUp, Login, Menu } from '@assets/_icons'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

export const SideMenu = ({ isMobile }: { isMobile?: boolean }) => {

  const [expaned, setExpanded] = useState<boolean>(false)


  const segment = useSelectedLayoutSegment()

  // if (isMobile && !expaned)
  //   return <Menu className='cursor-pointer text-white' width={25} height={25} onClick={() => setExpanded(true)} />

  return (
    <>

      {isMobile  && <Menu className='cursor-pointer text-white' width={22.5} height={22.5} onClick={() => setExpanded(true)} />}
      
      {(!isMobile  || expaned) && <div className={`bg-dark-on-bg z-20 ${isMobile ? 'lg:hidden' : ''} fixed right-0 top-0 backdrop-brightness-50 text-dark-tooltip text-[16px] h-screen  rounded-app  gap-4 flex transition-all duration-300 flex-col ease-linear  ${expaned ? ' max-w-[10000px] p-5 items-stretch  top-0' : 'max-w-[60px] lg:max-w-[100px] overflow -hidden p-5   justify-start items-center'}`}>

        {!expaned && <Menu width={20} height={20} className='cursor-pointer' onClick={() => setExpanded(!expaned)} />}

        <div className='flex flex-row justify-between items-center gap-8'>

          <div className='flex flex-row gap-4 items-center justify-center'>

            <Image alt='logo' src={logo} width={40} height={40} />

            {expaned && <div className='flex flex-col gap-1'>
              <span className='font-bold text-white'>متارنگ</span>
              <span>متاورس رنگ</span>

            </div>}
          </div>

          <div className={`rounded-[50%]  w-8 h-8 shrink-0 flex flex-row justify-center items-center cursor-pointer text-dark-Font ${expaned ? 'bg-black' : 'hidden'}`} onClick={() => setExpanded(!expaned)}>
            <ChevronUp className={`rotate-90 `} width={12} height={12} />
          </div>

        </div>

        <div className='flex flex-col flex-1 overflow-auto'>


          {routes.map(route => <Link key={route.route} href={`/levels/${route.route}`} className={`flex flex-row gap-2.5  items-center rounded-app relative hover:bg-black   transition-all duration-200 cursor-pointer p-2.5 hover:text-dark-active-btn ${segment == route.route ? 'text-dark-active-btn bg-black rounded-r-app' : ''} `}>
            {segment == route.route && <div className='absolute h-[calc(100%-6px)] top-1/2 -translate-y-1/2 rounded-l-app bg-dark-active-btn w-1 right-0 '></div>}
            <Image src={route.img} height={35} width={27.5} alt={route.faTitle} />
            {expaned && <span>{route.faTitle}</span>}

          </Link>)}

        </div>

        <SelectLanguage hideTitle={expaned} />

        <div className={`bg-yellow-400 flex justify-between shrink-0 flex-row rounded-app  items-center text-black ${!expaned ? 'aspect-square p-2' : ' p-2 px-4'} `}>
          <Login width={20} height={20} />

          {expaned && <span>ورود</span>}

        </div>

        <div className='bg-gray-600 w-full h-[1px]'></div>

        <SelectTheme hideTitle={expaned} />

      </div>}
    </>
  )
}
