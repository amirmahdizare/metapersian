'use client'
import { SideMenu } from "./_components/SideMenu/SideMenu";
import { FooterSymbols } from "./_components/FooterSymbols/FooterSymbols";
import { Features } from "./_components/Features/Features";
import { Footer } from "./_components/Footer/Footer";
import { ResponsiveHeader } from "./_components/ResponsiveHeader/ResponsiveHeader";
import { QueryClient, QueryClientProvider } from "react-query";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchInterval: 1000 * 30 * 60,
                refetchOnWindowFocus: false,
                retry:false
            }
        }
    });

    return (
        <QueryClientProvider client={queryClient}>

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-14 xl:gap-16 bg-black pt-32 lg:pt-6  p-6 justify-center ">

                <ResponsiveHeader  />

                <div className="hidden lg:flex  h- screen z-10"><SideMenu /></div>

                <div className="flex flex-col gap-8 flex-1 items-start w-full max-w-[1650px] font-normal">
                    {children}
                    <Features />
                    <FooterSymbols />
                    <Footer />
                </div>

            </div>
        </QueryClientProvider>

    );
}
