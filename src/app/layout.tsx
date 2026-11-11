import type { Metadata, Viewport } from 'next'
import './globals.css'
import { HeroUIProvider } from '@heroui/react'

export const metadata: Metadata = {
  title: 'NextBase',
  description: 'Base reutilizable para proyectos con Next.js.',
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
}>) {
  return (
    <html lang="es" className="light">
      <body className="min-h-screen font-sans antialiased">
        <HeroUIProvider>
          <div className="min-h-screen">{children}</div>
        </HeroUIProvider>
      </body>
    </html>
  )
}
