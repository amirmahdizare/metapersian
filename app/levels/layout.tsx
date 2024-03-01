import type { Metadata } from "next";
import { SideMenu } from "../_components/SideMenu/SideMenu";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {


    return (
        <div className="flex flex-row gap2 bg-black h-full p-2">
            
            <SideMenu />

            <div className="flex flex-col gap-2">
                {children}
            </div>

        </div>
    );
}
