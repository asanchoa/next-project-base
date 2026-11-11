import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
// @ts-expect-error CSS is loaded by Next.js as a side effect.
import './globals.css'
import { HeroUIProvider } from '@heroui/react'
import { JSX } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Base Project',
  description: 'base project',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang="en" className="light">
      <body className={`${inter.className} h-full`}>
        <HeroUIProvider>
          <div className="h-[100vh]">{children}</div>
        </HeroUIProvider>
      </body>
    </html>
  )
}
