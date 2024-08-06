"use client"

import { animatePageIn } from "@/utils/animations"
import { useEffect } from "react"

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn()
  }, [])
  return (
    <div>
      <div
        id="banner-1"
        className="w-screen bg-neutral-950 z-10 fixed top-0 left-0 h-1/4"
      />
      <div
        id="banner-2"
        className="w-screen bg-neutral-950 z-20 fixed top-1/4 left-0 h-1/4"
      />
      <div
        id="banner-3"
        className="w-screen bg-neutral-950 z-30 fixed top-1/2 left-0 h-1/4"
      />
      <div
        id="banner-4"
        className="w-screen bg-neutral-950 z-40 fixed top-3/4 left-0 h-1/4"
      />
      {children}
    </div>
  )
}