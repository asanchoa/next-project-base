import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NextUIProvider } from '@nextui-org/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Base Project',
  description: 'base project',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang="en" className="light" translate="no">
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
      />
      <meta name="google" content="notranslate" />

      <body className={`${inter.className} h-full`}>
        <NextUIProvider>
          <div className="h-[100vh]">{children}</div>
        </NextUIProvider>
      </body>
    </html>
  )
}
