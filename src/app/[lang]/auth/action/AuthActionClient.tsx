'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { applyActionCode, verifyPasswordResetCode, confirmPasswordReset } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import Link from 'next/link'

type Mode = 'verifyEmail' | 'resetPassword' | 'recoverEmail' | 'unknown'
type Status = 'loading' | 'success' | 'error' | 'input'

const messages = {
  pl: {
    loading: 'Przetwarzanie…',
    verifyEmail_title: 'Weryfikacja emaila',
    resetPassword_title: 'Resetowanie hasła',
    recoverEmail_title: 'Przywracanie emaila',
    unknown_title: 'Nieznana akcja',
    success_verifyEmail: 'Twój email został zweryfikowany pomyślnie!',
    success_resetPassword: 'Hasło zostało zmienione. Możesz teraz zalogować się w aplikacji.',
    success_recoverEmail: 'Twój email został przywrócony.',
    error_expired: 'Link wygasł lub jest już nieważny. Poproś o nowy link.',
    error_generic: 'Wystąpił błąd. Spróbuj ponownie lub poproś o nowy link.',
    password_description: 'Wprowadź nowe hasło poniżej.',
    password_label: 'Nowe hasło',
    password_placeholder: 'Minimum 8 znaków',
    password_confirm_label: 'Potwierdź hasło',
    password_mismatch: 'Hasła nie są zgodne.',
    password_too_short: 'Hasło musi mieć minimum 8 znaków.',
    password_btn: 'Zmień hasło',
    open_app: 'Otwórz aplikację DiabCam',
    back_home: 'Strona główna',
  },
  en: {
    loading: 'Processing…',
    verifyEmail_title: 'Email Verification',
    resetPassword_title: 'Reset Password',
    recoverEmail_title: 'Recover Email',
    unknown_title: 'Unknown Action',
    success_verifyEmail: 'Your email has been successfully verified!',
    success_resetPassword: 'Password changed. You can now log in to the app.',
    success_recoverEmail: 'Your email address has been recovered.',
    error_expired: 'The link has expired or is no longer valid. Please request a new link.',
    error_generic: 'An error occurred. Please try again or request a new link.',
    password_description: 'Enter your new password below.',
    password_label: 'New password',
    password_placeholder: 'Minimum 8 characters',
    password_confirm_label: 'Confirm password',
    password_mismatch: 'Passwords do not match.',
    password_too_short: 'Password must be at least 8 characters.',
    password_btn: 'Change password',
    open_app: 'Open DiabCam app',
    back_home: 'Home',
  },
}

export default function AuthActionClient({ lang }: { lang: 'pl' | 'en' }) {
  const searchParams = useSearchParams()
  const mode = (searchParams?.get('mode') ?? 'unknown') as Mode
  const oobCode = searchParams?.get('oobCode') ?? ''

  const [status, setStatus] = useState<Status>('loading')
  const [errorMsg, setErrorMsg] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const t = messages[lang]
  const homeHref = `/${lang}`

  const titleKey = `${mode}_title` as keyof typeof t
  const title = t[titleKey] ?? t.unknown_title

  useEffect(() => {
    if (!oobCode || mode === 'unknown') {
      setStatus('error')
      setErrorMsg(t.error_generic)
      return
    }

    if (mode === 'verifyEmail' || mode === 'recoverEmail') {
      applyActionCode(auth, oobCode)
        .then(() => setStatus('success'))
        .catch((err: Error) => {
          setStatus('error')
          setErrorMsg(
            err.message.toLowerCase().includes('expir') || err.message.toLowerCase().includes('invalid')
              ? t.error_expired
              : t.error_generic
          )
        })
    } else if (mode === 'resetPassword') {
      verifyPasswordResetCode(auth, oobCode)
        .then(() => setStatus('input'))
        .catch(() => {
          setStatus('error')
          setErrorMsg(t.error_expired)
        })
    } else {
      setStatus('error')
      setErrorMsg(t.error_generic)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [oobCode, mode])

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault()
    setPasswordError('')
    if (password !== confirmPassword) {
      setPasswordError(t.password_mismatch)
      return
    }
    if (password.length < 8) {
      setPasswordError(t.password_too_short)
      return
    }
    try {
      await confirmPasswordReset(auth, oobCode, password)
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMsg(t.error_generic)
    }
  }

  const successKey = `success_${mode}` as keyof typeof t
  const successMessage = t[successKey] ?? t.success_verifyEmail

  return (
    <div style={s.page}>
      <Link href={homeHref} style={s.logo}>DiabCam</Link>

      <div style={s.card}>
        {/* Status icon */}
        <div style={s.iconWrap}>
          {status === 'loading' && <Spinner />}
          {status === 'success' && <SuccessIcon />}
          {status === 'error' && <ErrorIcon />}
          {status === 'input' && <LockIcon />}
        </div>

        <h1 style={s.title}>{title}</h1>

        {status === 'loading' && <p style={s.desc}>{t.loading}</p>}

        {status === 'success' && (
          <>
            <p style={s.desc}>{successMessage}</p>
            {mode !== 'resetPassword' && (
              <a href="diabcam://" style={s.btn}>{t.open_app}</a>
            )}
            <Link href={homeHref} style={s.link}>{t.back_home}</Link>
          </>
        )}

        {status === 'error' && (
          <>
            <p style={{ ...s.desc, color: '#e53e3e' }}>{errorMsg}</p>
            <Link href={homeHref} style={s.btn}>{t.back_home}</Link>
          </>
        )}

        {status === 'input' && mode === 'resetPassword' && (
          <form onSubmit={handlePasswordReset} style={s.form}>
            <p style={s.desc}>{t.password_description}</p>
            <div style={s.fieldGroup}>
              <label style={s.label}>{t.password_label}</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t.password_placeholder}
                style={s.input}
                required
                minLength={8}
              />
            </div>
            <div style={s.fieldGroup}>
              <label style={s.label}>{t.password_confirm_label}</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder={t.password_placeholder}
                style={s.input}
                required
                minLength={8}
              />
            </div>
            {passwordError && <p style={s.fieldError}>{passwordError}</p>}
            <button type="submit" style={s.btn}>{t.password_btn}</button>
          </form>
        )}
      </div>
    </div>
  )
}

/* --- Inline styles --- */
const s: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px 16px',
    background: 'linear-gradient(135deg, #f0f4ff 0%, #ffffff 100%)',
    fontFamily: 'Inter, system-ui, sans-serif',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#2f52db',
    marginBottom: '32px',
    textDecoration: 'none',
    letterSpacing: '-0.5px',
  },
  card: {
    background: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 4px 24px rgba(47,82,219,0.10)',
    padding: '48px 40px',
    maxWidth: '440px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    textAlign: 'center',
  },
  iconWrap: { marginBottom: '8px' },
  title: { fontSize: '1.5rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '4px' },
  desc: { fontSize: '1rem', color: '#64748b', lineHeight: 1.6 },
  btn: {
    display: 'inline-block',
    marginTop: '8px',
    padding: '12px 28px',
    background: '#2f52db',
    color: '#ffffff',
    borderRadius: '10px',
    fontWeight: 600,
    fontSize: '0.95rem',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
    textAlign: 'center',
  },
  link: { fontSize: '0.9rem', color: '#2f52db', textDecoration: 'underline', marginTop: '4px' },
  form: { width: '100%', display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' },
  fieldGroup: { display: 'flex', flexDirection: 'column', gap: '6px' },
  label: { fontSize: '0.875rem', fontWeight: 600, color: '#374151' },
  input: {
    padding: '10px 14px',
    borderRadius: '8px',
    border: '1.5px solid #e2e8f0',
    fontSize: '1rem',
    outline: 'none',
    fontFamily: 'inherit',
    width: '100%',
  },
  fieldError: { color: '#e53e3e', fontSize: '0.875rem', marginTop: '-8px' },
}

/* --- Icons --- */
function Spinner() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ animation: 'spin 1s linear infinite' }}>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <circle cx="24" cy="24" r="20" stroke="#e2e8f0" strokeWidth="4" />
      <path d="M44 24A20 20 0 0 0 24 4" stroke="#2f52db" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

function SuccessIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="28" fill="#ebf4eb" />
      <path d="M17 28.5L23.5 35L39 20" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ErrorIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="28" fill="#fff0f0" />
      <path d="M18 18L38 38M38 18L18 38" stroke="#e53e3e" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="28" fill="#eef2ff" />
      <rect x="17" y="26" width="22" height="16" rx="4" stroke="#2f52db" strokeWidth="2.5" />
      <path d="M21 26v-5a7 7 0 0 1 14 0v5" stroke="#2f52db" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="28" cy="33" r="2" fill="#2f52db" />
    </svg>
  )
}
