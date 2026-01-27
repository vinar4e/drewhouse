import type { Metadata } from 'next'
import { Short_Stack, Noto_Serif } from 'next/font/google'
import './globals.css'

const shortStack = Short_Stack({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-short-stack',
})

const notoSerif = Noto_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-serif',
})

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
    <html lang="en" className={`${shortStack.variable} ${notoSerif.variable}`}>
      <body>{children}</body>
    </html>
  )
}
