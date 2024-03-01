import type { Metadata } from "next";
import { SideMenu } from "./_components/SideMenu/SideMenu";
import { FooterSymbols } from "./_components/FooterSymbols/FooterSymbols";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {


    return (
        <div className="flex flex-row gap-2 bg-black h-full p-2 ">

            <SideMenu />

            <div className="flex flex-col gap-2 flex-1 items-center">
                {children}

                <FooterSymbols />
            </div>

        </div>
    );
}
