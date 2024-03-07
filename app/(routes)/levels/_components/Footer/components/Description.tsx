import React from 'react'
import logo from '@images/logo.png'
import Image from 'next/image'

export const Description = () => {
    return (

        <div className='flex flex-col gap-4 text-dark-Font'>

            <div className='flex flex-row gap-2 items-center'>
                <Image src={logo} alt='لوگو' width={70} height={70} />

                <div className='flex flex-col gap-2 font-bold text-2xl'>
                    <span>متاورس ملی</span>
                    <span>رهبری جهانی در دنیای موازی</span>

                </div>

            </div>

            <p className='font-light text-xl leading-8'>
                متاورس ملی، یک پروژه بزرگ و پیشرو در دنیای موازی متاورس رنگ است که توسط شرکت تعاونی زنجیره تامین بهشت به اجرا درآمده است. این پروژه، به واقعیت جدیدی در دنیای موازی و مجازی دست یافته و امکاناتی شگفت‌انگیز را به مردمان سرتاسر جهان ارائه می‌دهد تا تجربه‌هایی منحصر به فرد و جذاب را تجربه نمایند.
                تعاونی زنجیره تامین بهشت، به عنوان بانی اصلی این پروژه، با استفاده از تکنولوژی‌های پیشرفته و بهره‌گیری از مفهوم متاورس، به ایجاد یک جوامع مجازی جهانی ارتقا داده است. این پروژه امکان بهره وری از فناوریIoT، تجربه‌ی محیط سه بعدی واقعیت مجازی، و تعاملات بی‌پایان را در اختیار مردم قرار می‌دهد.
            </p>

        </div>

    )
}
