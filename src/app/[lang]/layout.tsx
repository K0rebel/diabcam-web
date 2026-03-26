import type { Metadata } from 'next'
import '../globals.css'

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
    <html lang={lang}>
      <body>
        {children}
      </body>
    </html>
  )
}
