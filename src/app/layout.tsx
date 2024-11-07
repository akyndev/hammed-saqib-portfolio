import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"
import Header from "@/components/header"
import LocomtiveScrollProvider from "@/providers/locomotive-scroll"
import { Montserrat, Bebas_Neue } from "next/font/google"

import "./globals.css"
import Template from "./template"
import Hero from "@/components/hero"

export const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
})
export const bebas_neue = Bebas_Neue({
  weight: ["400"],
  variable: "--font-roboto",
  subsets: ["latin"]
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className} overflow-hidden`}>
        <LocomtiveScrollProvider>
          <Template>
            <Header />
            {children}
            <CallToAction />
            <Footer />
          </Template>
        </LocomtiveScrollProvider>
      </body>
    </html>
  )
}
