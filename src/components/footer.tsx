"use client"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer id="contact">
      <div className="border-black border-t py-4">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold">
              <Link href={"/"}>HAMMED SAQIB.</Link>
            </div>

            <div>
              <ul className="flex items-center space-x-10 font-medium">
                <li>
                  <Link
                    id="link"
                    className="flex items-center gap-1"
                    href={"https://linkedin.com/in/hammad-saqib"}
                    target="_blank"
                  >
                    LinkedIn
                    <ArrowUpRight />
                  </Link>
                </li>
                <li>
                  <Link id="link" className="flex items-center gap-1" href={"https://instagram.com/hammad.saqib1"}>
                    instagram
                    <ArrowUpRight />
                  </Link>
                </li>
                <li>
                  <Link id="link" className="flex items-center gap-1" href={"https://www.behance.net/jonnyart86"}>
                    Behance
                    <ArrowUpRight />
                  </Link>
                </li>
                <li>
                  <Link id="link" className="flex items-center gap-1" href={"https://vimeo.com/jonnyart86"}>
                    Vimeo
                    <ArrowUpRight />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
