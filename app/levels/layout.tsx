import type { Metadata } from "next";
import { SideMenu } from "./_components/SideMenu/SideMenu";
import { FooterSymbols } from "./_components/FooterSymbols/FooterSymbols";
import { Features } from "./_components/Features/Features";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {


    return (
        <div className="flex flex-row gap-2 bg-black h-full p-2 justify-center">

            <SideMenu />

            <div className="flex flex-col gap-8 flex-1 items-center max-w-[1400px]">
                {children}
                <Features />
                <FooterSymbols />
            </div>

        </div>
    );
}
