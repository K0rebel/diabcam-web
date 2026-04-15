'use client'

import { useState } from 'react'
import { submitWaitlistEmail } from '@/app/actions'
import styles from './IosWaitlist.module.css'

export default function IosWaitlist({ dict }: { dict: any }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(formData: FormData) {
    setStatus('loading')
    const result = await submitWaitlistEmail(formData)
    
    if (result.success) {
      setStatus('success')
    } else {
      setStatus('error')
      // Custom error message or default from dict
      setErrorMessage(dict.waitlist.error)
    }
  }

  return (
    <section id="ios-waitlist" className={`${styles.waitlist} section`}>
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <h2 className={styles.title}>{dict.waitlist.title}</h2>
          <p className={styles.description}>{dict.waitlist.description}</p>
          
          {status === 'success' ? (
            <div className={styles.successMessage}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
              <span>{dict.waitlist.success}</span>
            </div>
          ) : (
            <form action={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={dict.waitlist.placeholder}
                  className={styles.input}
                  disabled={status === 'loading'}
                />
                <button 
                  type="submit" 
                  className={styles.button}
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? '...' : dict.waitlist.button}
                </button>
              </div>
              {status === 'error' && (
                <p className={styles.errorMessage}>{errorMessage}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
