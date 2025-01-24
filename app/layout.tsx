import type { Metadata} from "next";
import { Anybody } from "next/font/google";
import "./globals.css";
//import LogDisabler from "@/lib/disableLog";
import Header from "@/components/partials/Header";
import Footer from "@/components/partials/Footer";
//import NMainScene from "@/components/3d/NMainScene";
//import UniqueUserChecker from "@/components/session/UniqueUserChecker";
import Loader, {LoaderProvider} from "@/components/partials/Loader";
import React from "react";
import dynamic from 'next/dynamic';

const inter = Anybody({ subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
  title: "Nasean's Portfolio",
  description: "Portfolio Website created using Next.js",
  authors: [{ name: 'Nasean', url: 'https://www.linkedin.com/in/nasean-lawson/' }],
  icons: {
    icon: [{ url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' }, { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' }],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: "/favicon/site.webmanifest",
};

const LogDisabler = dynamic(() => import("@/lib/disableLog"), { ssr: false });
const UniqueUserChecker = dynamic(() => import("@/components/session/UniqueUserChecker"), { ssr: false });
const NMainScene = dynamic(() => import("@/components/3d/NMainScene"), { ssr: false });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={'grid grid-cols-12 grid-rows-[auto_1fr_auto] bg-black min-h-screen min-w-screen overflow-x-hidden overflow-y-auto' + inter.className}>
        <LoaderProvider>
          <Loader>
            <Header key="header"/>
            {React.Children.map(children, (child, index) => 
                React.isValidElement(child) ? React.cloneElement(child, { key: child.key || `page-content-${index}` }): child
            )}
            <Footer key="footer"/>
          </Loader>
        </LoaderProvider>
        <LogDisabler key="log-disabler"/>
        <NMainScene key="main-scene"/>
        <UniqueUserChecker/>
      </body>
    </html>
  );
}
