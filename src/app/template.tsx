"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"

export default function Template({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const pathname = usePathname()


  useGSAP(() => {



    gsap.to(".page-title", {
      translateY: 0
    })
    gsap.to(".call-to-action", {
      translateX: 300,
      duration: 3
    })
  })

  // if (loading) return <> {pathname === "/" ? "Home" : pathname.slice(1, pathname.length)}Loading...</>

  return (
    <div className="rounded-xl">
      <main>{children}</main>
    </div>
  )
}
