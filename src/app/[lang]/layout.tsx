import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ 
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'DiabCam - Liczy się mniej liczenia',
  description: 'AI Food Scanner for Diabetics and Keto - Scan, Eat, Track.',
  icons: {
    icon: '/assets/icon-rounded.webp',
  },
}


export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params;

  return (
    <html lang={lang} className={inter.variable}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
