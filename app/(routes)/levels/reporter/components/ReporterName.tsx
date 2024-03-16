'use client'
import React from 'react'
import { Spinner } from '@/app/_assets/_icons'
import { UseLevelsData } from '@/app/_hooks'
import { useParams } from 'next/navigation'

export const ReporterName = () => {

  const { data, isLoading, isError } = UseLevelsData()

  const { params } = useParams()

  const levelTitle = data?.data.data.find(d => d.id == params[0])?.name

  if (data?.data?.data)
    return (<span className="text-2xl font-bold text-[#F1F3F5]">سطح {levelTitle}</span>)

  else if (isError)
    return <span className='text-white'>-- صفحه سطوح --</span>

  return <Spinner width={24} height={24} />
}
