"use client";

import dynamic from "next/dynamic"

const LogDisabler = dynamic(() => import("@/lib/disableLog"), { ssr: false })
const NMainScene = dynamic(() => import("@/components/3d/NMainScene"), { ssr: false })

export default function Client3DRuntime() {
  return (
    <>
      <LogDisabler />
      <NMainScene />
    </>
  )
}