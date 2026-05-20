"use client";

import dynamic from "next/dynamic"

const LogDisabler = dynamic(() => import("@/lib/disableLog"), { ssr: false })
const Scene = dynamic(() => import("@/components/3d/full-scenes/EarthSonicScene"), { ssr: false })

export default function Client3DRuntime() {
  return (
    <>
      <LogDisabler />
      <Scene />
    </>
  )
}