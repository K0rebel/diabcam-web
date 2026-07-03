import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import '../globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'DiabCam – Inteligentny Skaner Posiłków AI',
  description: 'DiabCam to aplikacja dla diabetyków, osób na keto i dbających o sylwetkę. Skanuj posiłki aparatem, głosem lub wyszukaj w bazie 5M+ produktów.',
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
  const { lang } = await params

  return (
    <html lang={lang} className={spaceGrotesk.variable}>
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  )
}
