"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useEffect } from "react"
import SplitType from "split-type"

type TextRevealProps = {
    content: string
    className?: string
}

export default function TextReveal({ content, className }: TextRevealProps) {
  const { contextSafe } = useGSAP()

  const onClickGood = contextSafe(() => {
    gsap.to("#my-text .char", {
      translateY: 0,
      stagger: 0.05,
      duration: 0.3,
      ease: "power1.inOut",
    })
  })

  useEffect(() => {
    new SplitType("#my-text")
    onClickGood()
  }, [])

  return (
    <div
      id="my-text"
      className={`${className}`}
    >
      {content}
    </div>
  )
}
