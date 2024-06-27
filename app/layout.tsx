import type { Metadata } from "next";
import { Anybody } from "next/font/google";
import "./globals.css";

const inter = Anybody({ subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
  title: "Nasean's Portfolio",
  description: "Portfolio Website created using next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'grid grid-cols-12 grid-rows-12 bg-main-theme h-screen w-screen overflow-hidden' + inter.className}>
        {children}
      </body>
    </html>
  );
}
