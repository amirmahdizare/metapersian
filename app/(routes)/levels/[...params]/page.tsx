import React from 'react'
import { LevelPageProps, pageProps } from '@/app/_types'
import InfoPage from '../reporter/info/page'
import GemPage from '../reporter/gem/page'
import GiftPage from '../reporter/gift/page'
import PermissionPage from '../reporter/permissions/page'
import RewardPage from '../reporter/reward/page'

export default function page({ params: { params } }: LevelPageProps) {

    if (params[1] == 'info')
        return <InfoPage />

    else if (params[1] == 'gem')
        return <GemPage />

    else if (params[1] == 'gift')
        return <GiftPage />

    else if (params[1] == 'permissions')
        return <PermissionPage />

    else if (params[1] == 'reward')
        return <RewardPage />

    return (
        <div className='text-white text-center'>صفحه یافت نشد!!</div>
    )
}
