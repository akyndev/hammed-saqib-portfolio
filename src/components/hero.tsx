import Image from "next/image"
import TextReveal from "./text-reveal"
import heroImage from "/public/hero-image.png"
import { montserrat } from "@/app/fonts"

export default function Hero() {
  return (
    <div id="home">
      <div className="relative h-screen w-full bg-black">
        <div className="absolute inset-0 opacity-50">
          <Image src={heroImage} alt="hero image" fill className="object-cover " />
        </div>

        <div
          className={`text-[9rem] text-white [clip-path:polygon(0%_0%,0%_100%,100%_100%,100%_0%)] absolute left-8 top-12 w-max tracking-wide font-black ${montserrat.className}`}
        >
          <TextReveal content="HAMMED" />
        </div>
        <div
          className={`text-[9rem] text-white [clip-path:polygon(0%_0%,0%_100%,100%_100%,100%_0%)] absolute right-8 top-12  w-max tracking-wide font-black z-0 ${montserrat.className}`}
        >
          <TextReveal content="SAQIB" />
        </div>

        <div
          className={`text-[9rem] text-white [clip-path:polygon(0%_0%,0%_100%,100%_100%,100%_0%)] absolute right-8  bottom-0 w-max tracking-wide font-black z-0 ${montserrat.className}`}
        >
          <TextReveal content="3D DESIGNER" />
        </div>
      </div>
    </div>
  )
}
