"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import ScrollTrigger from "gsap/ScrollTrigger"
import LocomotiveScroll from "locomotive-scroll"
import { useEffect } from "react"

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin)

const LocomtiveScrollProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      new LocomotiveScroll()
    }
  }, [])

  return <>{children}</>
}

export default LocomtiveScrollProvider
