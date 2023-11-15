import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import Image from "next/image";
import { NavItems, MobileMenu } from "@/components/Menu";
import "./globals.css";

export const metadata: Metadata = {
  title: "BLVKHVND Acolyte Generator",
  description: "Customize your social banners and rep BLVKHVND loud!",
};

const Header = () => {
  return (
    <div className="flex items-stretch p-8 items-start md:items-center border-b border-black">
      <div className="flex flex-col gap-8 md:gap-6 lg:gap-14 md:flex-row">
        <div className="flex gap-4 items-center">
          <Image
            src="/images/shield.svg"
            width="65"
            height="79"
            alt="BLVKHVND shield"
          />
          <Image
            src="/images/blvkhvnd-creators.svg"
            width="101"
            height="62"
            alt="BLVKHVND creators logo"
          />
        </div>

        <div className="flex flex-col md:max-w-xs">
          <span className="text-2xl font-medium">ACOLYTE GENERATOR</span>
          <span className="text-[#4B4B4B]">
            Customize your social banners and rep BLVKHVND loud!
          </span>
        </div>
      </div>

      <div className="grow shrink" />

      <div className="flex flex-row gap-4 font-medium md:items-center hidden md:flex">
        <NavItems />
      </div>
      <div className="md:hidden">
        <MobileMenu />
      </div>
    </div>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistMono.className}>
      <body className="min-h-screen w-full">
        <Header />
        <main className="relative flex w-full grow">{children}</main>
      </body>
    </html>
  );
}
