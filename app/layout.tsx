import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Drew House - Video Editor Portfolio',
  description: 'High-end video editing portfolio for top-tier commercial clients',
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
