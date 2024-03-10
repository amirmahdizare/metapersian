import type { Metadata } from "next";
import "./globals.css";
import { AzarMehr, AzarMehrNumber } from "./_assets/_fonts/AzarMehr";

export const metadata: Metadata = {
  title: "Metaverse Rang Project",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en" dir="rtl" className="text-[12px] lg:text-[16px]">
      <body className={` ${AzarMehr.className} ${AzarMehrNumber.className} font-normal  container max-w-[1920px] `}>{children}</body>
    </html>
  );
}
