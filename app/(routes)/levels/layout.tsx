import type { Metadata } from "next";
import { SideMenu } from "./_components/SideMenu/SideMenu";
import { FooterSymbols } from "./_components/FooterSymbols/FooterSymbols";
import { Features } from "./_components/Features/Features";
import { Footer } from "./_components/Footer/Footer";
import { ResponsiveHeader } from "./_components/ResponsiveHeader/ResponsiveHeader";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {


    return (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 xl:gap-16 bg-black  p-6 justify-center ">

            <ResponsiveHeader title="سطح خبرنگار یک" />

            <div className="hidden lg:flex"><SideMenu /></div>

            <div className="flex flex-col gap-8 flex-1 items-start w-full max-w-[1400px]">
                {children}
                <Features />
                <FooterSymbols />
                <Footer />
            </div>

        </div>
    );
}