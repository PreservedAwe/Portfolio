"use client";

import Navbar from "@/components/containers/Navbar";
import {motion} from "framer-motion";
import {useMemo} from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isAdminPage = pathname.includes('/admin');

  const memoizedHeaderContent = useMemo(() => (
    <Navbar/>
  ), [pathname]); 

  if (isAdminPage) {
    return null;
  }

  return (
    <motion.header initial={{ y: -150 }} animate={{ y: 0 }} transition={{ ease: "easeIn", duration: 1.0 }} className="col-span-12 row-span-2 m-4">
      {memoizedHeaderContent}
    </motion.header>
  )
}
