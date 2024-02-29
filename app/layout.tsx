import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AzarMehr, AzarMehrNumber } from "./_fonts/AzarMehr";


export const metadata: Metadata = {
  title: "Metaverse Rang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${AzarMehr.className} ${AzarMehrNumber.className} font-medium text-[14px] container max-w-[1920px]`}>{children}</body>
    </html>
  );
}
