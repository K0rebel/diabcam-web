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
      setErrorMessage(dict.waitlist.error)
    }
  }

  return (
    <section id="ios-waitlist" className={styles.section}>
      {/* decorative blobs */}
      <div className={styles.blob1} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />

      <div className={`${styles.inner} container`}>
        {/* Apple icon */}
        <div className={styles.appleIconWrap}>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            width="30"
            height="30"
            aria-hidden="true"
          >
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
        </div>

        <h2 className={styles.title}>{dict.waitlist.title}</h2>
        <p className={styles.desc}>{dict.waitlist.description}</p>

        {status === 'success' ? (
          <div className={styles.success}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <path d="m9 11 3 3L22 4" />
            </svg>
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
                className={styles.btn}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <span className={styles.spinner} />
                ) : (
                  dict.waitlist.button
                )}
              </button>
            </div>
            {status === 'error' && (
              <p className={styles.error}>{errorMessage}</p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}
