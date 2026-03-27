'use client'

import { useEffect, useState, use, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { 
  applyActionCode, 
  confirmPasswordReset, 
  verifyPasswordResetCode,
  checkActionCode
} from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { getDictionary } from '@/lib/get-dictionary'
import { Loader2, CheckCircle2, XCircle, KeyRound, Mail } from 'lucide-react'
import { clsx } from 'clsx'

function AuthActionContent({ lang }: { lang: string }) {
  const [dict, setDict] = useState<any>(null)
  const [status, setStatus] = useState<'loading' | 'success' | 'error' | 'form'>('loading')
  const [mode, setMode] = useState<string | null>(null)
  const [oobCode, setOobCode] = useState<string | null>(null)
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordError, setPasswordError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const searchParams = useSearchParams()

  useEffect(() => {
    getDictionary(lang as any).then(setDict)
  }, [lang])

  useEffect(() => {
    const modeParam = searchParams.get('mode')
    const oobCodeParam = searchParams.get('oobCode')

    setMode(modeParam)
    setOobCode(oobCodeParam)

    if (!modeParam || !oobCodeParam) {
      if (modeParam || oobCodeParam) setStatus('error')
      return
    }

    switch (modeParam) {
      case 'verifyEmail':
        handleVerifyEmail(oobCodeParam)
        break
      case 'resetPassword':
        handleResetPassword(oobCodeParam)
        break
      case 'recoverEmail':
        handleRecoverEmail(oobCodeParam)
        break
      default:
        setStatus('error')
    }
  }, [searchParams])

  const handleVerifyEmail = async (code: string) => {
    try {
      await applyActionCode(auth, code)
      setStatus('success')
    } catch (error) {
      console.error('Error verifying email:', error)
      setStatus('error')
    }
  }

  const handleResetPassword = async (code: string) => {
    try {
      await verifyPasswordResetCode(auth, code)
      setStatus('form')
    } catch (error) {
      console.error('Error verifying reset code:', error)
      setStatus('error')
    }
  }

  const handleRecoverEmail = async (code: string) => {
    try {
      await checkActionCode(auth, code)
      await applyActionCode(auth, code)
      setStatus('success')
    } catch (error) {
      console.error('Error recovering email:', error)
      setStatus('error')
    }
  }

  const handleSubmitPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    if (newPassword !== confirmPassword) {
      setPasswordError(dict?.auth?.passwordMismatch)
      return
    }
    if (!oobCode) return

    setIsSubmitting(true)
    try {
      await confirmPasswordReset(auth, oobCode, newPassword)
      setStatus('success')
    } catch (error) {
      console.error('Error resetting password:', error)
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!dict) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
    </div>
  )

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-slate-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-2">
            {status === 'loading' && <Loader2 className="w-8 h-8 animate-spin" />}
            {status === 'success' && <CheckCircle2 className="w-8 h-8 text-green-500" />}
            {status === 'error' && <XCircle className="w-8 h-8 text-red-500" />}
            {status === 'form' && <KeyRound className="w-8 h-8" />}
          </div>
          
          <h1 className="text-2xl font-bold text-slate-900">
            {status === 'loading' && dict.auth.verifying}
            {status === 'success' && (mode === 'resetPassword' ? dict.auth.resetSuccess : dict.auth.verifySuccess)}
            {status === 'error' && (mode === 'resetPassword' ? dict.auth.resetError : dict.auth.verifyError)}
            {status === 'form' && dict.auth.resetPassword}
          </h1>
        </div>

        {status === 'form' && (
          <form onSubmit={handleSubmitPassword} className="space-y-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">{dict.auth.newPassword}</label>
              <input
                type="password"
                required
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">{dict.auth.confirmPassword}</label>
              <input
                type="password"
                required
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {passwordError && <p className="text-sm text-red-500">{passwordError}</p>}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg shadow-blue-200 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
              {dict.auth.submitting}
            </button>
          </form>
        )}

        {(status === 'success' || status === 'error') && (
          <div className="pt-4">
            <a
              href="https://diabcam.app"
              className="block w-full text-center py-3 px-4 border border-slate-200 rounded-lg text-slate-600 font-medium hover:bg-slate-50 transition-all"
            >
              {dict.auth.backToApp}
            </a>
          </div>
        )}
      </div>
    </main>
  )
}

export default function AuthActionPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params)
  
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    }>
      <AuthActionContent lang={lang} />
    </Suspense>
  )
}
