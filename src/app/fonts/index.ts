import { Montserrat, Bebas_Neue } from "next/font/google"

export const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
})
export const bebas_neue = Bebas_Neue({
  weight: ["400"],
  variable: "--font-roboto",
  subsets: ["latin"]
})
