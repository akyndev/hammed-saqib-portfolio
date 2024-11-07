"use client"
import LocomotiveScroll from "locomotive-scroll"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollToPlugin from "gsap/ScrollToPlugin"

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin)


const LocomtiveScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const locomotiveScroll = new LocomotiveScroll()

  return <>{children}</>
}

export default LocomtiveScrollProvider
