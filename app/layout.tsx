import type { Metadata } from "next";
import { Anybody } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'grid grid-cols-12 grid-rows-12 bg-main-theme min-h-screen min-w-screen overflow-x-hidden overflow-y-auto' + inter.className}>
        {children}
      </body>
    </html>
  );
}
