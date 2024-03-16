import React from 'react'
import { LevelPageProps, pageProps } from '@/app/_types'
import InfoPage from '../_sections/info/page'
import GemPage from '../_sections/gem/page'
import GiftPage from '../_sections/gift/page'
import PermissionPage from '../_sections/permissions/page'
import RewardPage from '../_sections/reward/page'
import { redirect } from 'next/navigation'

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
        redirect(`${params}/info`)
    )
}
