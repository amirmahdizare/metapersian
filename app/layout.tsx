import type { Metadata } from "next";
import {  Vazirmatn } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Metaverse Rang Project",
};

const vazir = Vazirmatn({subsets:['arabic']})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en" dir="rtl" className="text-[12px] lg:text-[16px]">
      <body className={` ${vazir.className} font-medium  container max-w-[1920px] `}>{children}</body>
    </html>
  );
}
