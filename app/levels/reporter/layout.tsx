'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TabSelector } from "./components/TabSelector";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {


    const pathname = usePathname()



    return (
        <div className="flex flex-col gap-6 bg-[#080807] w-full box-border p-8  rounded-app flex-1  ">
            <div className="flex flex-row gap-2 justify-end lg:justify-between">
                <span className="text-2xl font-bold text-[#F1F3F5]">سطح خبرنگار یک</span>
                <Link href={'#'} className="p-3 rounded-app bg-[#1A1A18] text-gray-400 lg:block hidden">لیست دریافت کنندگان</Link>
            </div>

            <TabSelector />
            <div className="text-xl">
                {children}
            </div>
        </div>
    );
}
