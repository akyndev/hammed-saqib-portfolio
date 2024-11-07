import tailwindcssAspectRatio from "@tailwindcss/aspect-ratio"

import type { Config } from "tailwindcss"
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        xl: "1440px"
      }
    },
    corePlugins: {
      aspectRatio: false
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)"
      }
    }
  },
  plugins: [tailwindcssAspectRatio]
}
export default config
