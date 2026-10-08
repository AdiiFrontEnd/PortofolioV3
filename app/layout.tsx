import type { Metadata } from "next"
import "./global.css"

export const metadata: Metadata = {
  title: "Portfolio V3",
  description: "Astro Bubble Hero Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}