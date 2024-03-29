import type { Metadata } from 'next'

import localFont from 'next/font/local'

import './globals.css'
const GraphikLC = localFont({ src: './graphiklcweb_medium.ttf' })


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={GraphikLC.className}>{children}</body>
    </html>
  )
}
