'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    
    
    const pathname = usePathname()
    
    
    const ButtonLink =  ({ title, link }: { title: string, link: string }) => {
        return <Link href={`/levels/reporter${link}`} className={pathname.includes(link) ? 'text-dark-active-btn border-b-2 border-dark-active-btn p-3 pb-2.5' : ' border-b-2 border-transparent p-3 pb-2.5' }>
            {title}
        </Link>
    }



    return (
        <div className="flex flex-col gap-6 bg-[#080807] w-full box-border p-8  rounded-app flex-1  ">
            <div className="flex flex-row gap-2 justify-between">
                <span className="text-2xl font-bold text-[#F1F3F5]">سطح خبرنگار یک</span>
                <Link href={'#'} className="p-3 rounded-app bg-[#1A1A18] text-gray-400">لیست دریافت کنندگان</Link>
            </div>

            <div className="bg-dark-on-bg rounded-app  flex justify-evenly  flex-row gap-4 w-full text-[#868B90] overflow-auto">
                <ButtonLink title="اطلاعات اولیه سطح"  link="/info" />
                <ButtonLink title="مجوز ها و دسترسی ها" link="/permission" />
                <ButtonLink title="نگین سطح"  link="/gem" />
                <ButtonLink title="هدیه همراه"  link="/gift" />
                <ButtonLink title="پاداش رسیدن به سطح" link="/reward" />
            </div>
            
            {children}
        </div>
    );
}
