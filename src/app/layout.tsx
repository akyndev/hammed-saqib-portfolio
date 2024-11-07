import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"
import Header from "@/components/header"
import LocomtiveScrollProvider from "@/providers/locomotive-scroll"

import "./globals.css"
import Template from "./template"
import { montserrat } from "./fonts"



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
