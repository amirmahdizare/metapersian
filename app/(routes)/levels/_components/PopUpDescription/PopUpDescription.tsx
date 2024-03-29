'use client'
import { Close } from '@assets/_icons'
import React, { ReactNode, useEffect, useState } from 'react'
import ClickAwayListener from 'react-click-away-listener'

export const PopUpDescription = ({ description, children }: { description: string, children?: ReactNode }) => {

    const [open, setOpen] = useState<boolean>(false)

    useEffect(() => {
        if (open)
            document.body.classList.add('h-[100px]', 'overflow-hidden', 'lg:h-full', 'lg:overflow-auto')
        else
            document.body.classList.remove('h-[100px]', 'overflow-hidden', 'lg:h-full', 'lg:overflow-auto')
    },
        [open])

    return (
        <div className='flex flex-col gap-6 items-start lg:hidden'>
            <span className='text-white'>توضیحات:</span>
            <p className='line-clamp-6 text-ellipsis overflow-hidden text-white' dangerouslySetInnerHTML={{ __html: description }} />

            <div className='flex flex-row items-center w-full gap-2  justify-between'>
                <a className='text-dark-active-btn cursor-pointer' onClick={() => setOpen(true)}>مشاهده بیشتر</a>
                {children}
            </div>

            {open && <div className='fixed top-24 left-0 backdrop-brightness-[25%] z-30   p-4 h-screen w-screen '>
                <ClickAwayListener onClickAway={() => setOpen(false)}>
                    <div className='rounded-app border-gray-400 p-8 flex flex-col gap-4 no-scrollbar max-w-screen-sm border overflow-auto max-h-[calc(100%-100px)] bg-dark-on-bg text-gray-400'>
                        <div className='flex flex-row gap-2 justify-between'>
                            <span className='text-2xl'>توضیحات :</span>
                            <Close className='text-gray-400 cursor-pointer' width={17} height={17} onClick={() => setOpen(false)} />
                        </div>
                        <p className='leading-9' dangerouslySetInnerHTML={{ __html: description }} />
                    </div>
                </ClickAwayListener>
            </div>}

        </div>
    )
}
