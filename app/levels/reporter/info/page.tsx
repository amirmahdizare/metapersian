import React from 'react'
import { infoData } from './data.mock'
import { Detailtem } from '@/app/_components/Detailtem/Detailtem'

export default function page() {
    return (
        <div className='flex flex-col gap-4 text-xl'>
            <span className='text-white'>توضیحات:</span>

            <p className='text-gray-300 leading-8'>
                پس از کسب ۱۰۰۰ امتیاز، علاوه بر سطح شهروندی، به سطح خبرنگار نیز دسترسی خواهید داشت. در این سطح، می‌توانید با استفاده از هدیه همراه، تمامی رویدادها و خبرهای مهم را ثبت و با سایر شهروندان به اشتراک بگذارید. همچنین، می‌توانید فعالیت خود را در زمینه‌های عکاسی، مدلینگ، تبلیغات و عکاسی طبیعت مجازی و موازی در متاورس رنگ آغاز کنید. این سطح نیز شامل ۶ رتبه است و شما می‌توانید رتبه اول این سطح را کسب کنید. به علاوه، شما می‌توانید در بخش توسعه، ایده‌ها و پیشنهادات خود را برای افزایش قابلیت‌های سطح خبرنگار به ما ارائه دهید. با افزایش امتیاز خود، می‌توانید سطوح دیگری همچون توسعه‌دهنده، مشارکت‌کننده و بازرس را نیز به دست آورید.
            </p>


            <div className='w-full bg-dark-on-bg h-1'></div>
            <div className='grid grid-row-2 gap-2'>


                {infoData.items.sort((a, b) => (a?.span ?? 0) > (b?.span ?? 0) ? 1 : -1).map(item => <div className={`${item.span == 2 ? 'col-span-2' : 'col-span-2 lg:col-span-1'} `}>
                    <Detailtem {...item} />
                </div>)}

            </div>
        </div>
    )
}
