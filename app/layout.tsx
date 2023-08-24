import "./globals.css"
import type { Metadata } from "next"
import { Inter, Quicksand } from "next/font/google"
import { Abril_Fatface } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
// const abrilFatface = Abril_Fatface({ weight: "400", subsets: ["latin"] })
// const quicksand = Quicksand({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Readlist",
  description: "Reading list app created by Joona Nylander",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
