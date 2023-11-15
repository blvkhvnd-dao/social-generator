import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "BLVKHVND Acolyte Generator",
  description: "Customize your social banners and rep BLVKHVND loud!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistMono.className}>
      <body className="min-h-screen w-full">
        <main className="relative flex w-full grow">{children}</main>
      </body>
    </html>
  );
}
