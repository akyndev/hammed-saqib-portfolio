"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Link from "next/link"
import { usePathname } from "next/navigation"
const Header = () => {
  const pathname = usePathname()

  const { contextSafe } = useGSAP()

  const scrollToView = contextSafe((id: string) => {
    gsap.to(window, { duration: 1, scrollTo: { y: `#${id}`, offsetY: 50 }, ease: "power2" })
  })

  return (
    <header className="fixed top-0 inset-x-0 z-10 bg-white">
      <div className="flex items-center justify-between p-4 container">
        <div className="text-xl font-semibold">
          <Link href={"/"}>HAMMED SAQIB</Link>
        </div>

        <div>
          <nav>
            <ul className="flex items-center space-x-10 font-medium">
              <li className="cursor-pointer" onClick={() => scrollToView("home")}>
                Home
              </li>

              <li className="cursor-pointer" onClick={() => scrollToView("work")}>
                Work
              </li>
              <li className="cursor-pointer" onClick={() => scrollToView("about")}>
                About
              </li>
              <li className="cursor-pointer" onClick={() => scrollToView("contact")}>
                Contact
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
