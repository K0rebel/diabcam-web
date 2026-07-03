import { Suspense } from 'react'
import AuthActionClient from './AuthActionClient'

export default async function AuthActionPage({
  params,
}: {
  params: Promise<{ lang: 'pl' | 'en' }>
}) {
  const { lang } = await params

  return (
    <Suspense
      fallback={
        <div style={loadingStyle}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ animation: 'spin 1s linear infinite' }}>
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            <circle cx="24" cy="24" r="20" stroke="#e2e8f0" strokeWidth="4" />
            <path d="M44 24A20 20 0 0 0 24 4" stroke="#2f52db" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>
      }
    >
      <AuthActionClient lang={lang} />
    </Suspense>
  )
}

const loadingStyle: React.CSSProperties = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
