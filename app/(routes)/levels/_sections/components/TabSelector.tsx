'use client'
import Link from 'next/link'
import { useParams, usePathname, useSelectedLayoutSegment, useSelectedLayoutSegments } from 'next/navigation'
import React from 'react'

export const TabSelector = () => {


    const pathname = usePathname()

    const { params } = useParams()

    const slug = params[0]


    const ButtonLink = ({ title, link }: { title: string, link: string }) => {
        return <Link prefetch={false} href={`/levels/${slug}${link}`} className={pathname.includes(link) ? 'text-dark-active-btn border-b-2 border-dark-active-btn p-3 pb-2.5 font-bold' : ' border-b-2 border-transparent p-3 pb-2.5'}>
            {title}
        </Link>
    }


    return (
        <div className="bg-dark-on-bg rounded-app  flex lg:justify-evenly whitespace-nowrap  flex-row gap-4 w-full text-[#868B90] overflow-auto no-scrollbar ">
            <ButtonLink title="اطلاعات اولیه سطح" link="/general-info" />
            <ButtonLink title="مجوز ها و دسترسی ها" link="/permissions" />
            <ButtonLink title="نگین سطح" link="/gem" />
            <ButtonLink title="هدیه همراه" link="/gift" />
            <ButtonLink title="پاداش رسیدن به سطح" link="/reward" />
        </div>
    )
}
