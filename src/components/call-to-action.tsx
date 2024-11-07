"use client"

import Image from "next/image"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useEffect } from "react"
import SplitType from "split-type"
import image1 from "/public/image1.png"
import image2 from "/public/image2.png"

export default function CallToAction() {
  const { contextSafe } = useGSAP()

  const onClickGood = contextSafe(() => {
    gsap.to("#call-to-action .char", {
      translateY: 0,
      stagger: 0.08,
      duration: 0.3,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#call-to-action .char",
        start: "top bottom",
        end: "top 50%",
        scrub: true
      }
    })
  })

  useEffect(() => {
    new SplitType("#call-to-action")
    onClickGood()
  }, [])

  return (
    <div className="pt-20">
      <div className="relative h-screen rounded-xl overflow-hidden container mx-auto">
        <div
          id="call-to-action"
          className={`text-[12rem] text-white absolute inset-x-0 top-16 w-max mx-auto tracking-wide font-black z-0 `}
        >
          Let&apos;s Talk
        </div>
        <div className="absolute inset-0 -z-10">
          <Image src={image1} alt="image 1 " fill />
        </div>
        <div className="absolute inset-0">
          <Image src={image2} alt="image 2" fill className="" />
        </div>
      </div>
    </div>
  )
}
