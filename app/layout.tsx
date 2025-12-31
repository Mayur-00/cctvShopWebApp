import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ri Plus- Professional CCTV & Security Company",
  description:
    "Premium CCTV cameras, DVR/NVR systems, and security electronics. Professional surveillance equipment for homes and businesses.",
  keywords: ["CCTV cameras", "security systems", "DVR", "NVR", "surveillance", "security electronics", "IP cameras"],
  icons: {
    icon: [
      {
        url: "/favicon.jpf",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon.jpg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon.jpg ",
        type: "image/jpg",
      },
    ],
    apple: "/favicon.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
