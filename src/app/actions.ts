'use server'

export async function submitWaitlistEmail(formData: FormData) {
  const email = formData.get('email')
  
  if (!email) {
    return { success: false, error: 'Email is required' }
  }

  const SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL

  if (!SCRIPT_URL) {
    console.warn('GOOGLE_SCRIPT_URL is not set in environment variables.')
    // We return success locally if URL isn't configured so the UI doesn't crash during development
    return { success: false, error: 'GOOGLE_SCRIPT_URL is not configured.' }
  }

  try {
    const params = new URLSearchParams()
    params.append('email', email.toString())

    await fetch(SCRIPT_URL, {
      method: 'POST',
      body: params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      cache: 'no-store'
    })

    return { success: true }
  } catch (err) {
    console.error('Waitlist submission error:', err)
    return { success: false, error: 'Failed to submit.' }
  }
}
