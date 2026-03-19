import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'pl']
const defaultLocale = 'pl'

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    if (acceptLanguage.includes('pl')) return 'pl'
    if (acceptLanguage.includes('en')) return 'en'
  }
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|assets|favicon.ico).*)',
  ],
}
