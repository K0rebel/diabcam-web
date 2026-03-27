import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'pl']
const defaultLocale = 'pl'

function getLocale(request: NextRequest): string {
  // Check if lang is passed as a query param (common in Firebase action links)
  const langParam = request.nextUrl.searchParams.get('lang')
  if (langParam && locales.includes(langParam)) return langParam

  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    if (acceptLanguage.includes('pl')) return 'pl'
    if (acceptLanguage.includes('en')) return 'en'
  }
  return defaultLocale
}


export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Skip middleware redirect for auth actions, let next.config.js handle it
  if (pathname.includes('/auth/action')) return

  const locale = getLocale(request)
  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname}`
  url.search = search // Explicitly preserve all query parameters
  
  return NextResponse.redirect(url)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next) and static files
    '/((?!_next|assets|favicon.ico|app-ads.txt).*)',
  ],
}
