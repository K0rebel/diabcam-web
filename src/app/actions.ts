'use server'

export async function submitWaitlistEmail(formData: FormData) {
  const email = formData.get('email')
  
  if (!email) {
    return { success: false, error: 'Email is required' }
  }

  let SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL

  if (!SCRIPT_URL) {
    console.error('Waitlist Error: GOOGLE_SCRIPT_URL is not set in environment variables.')
    return { success: false, error: 'Configuration error: SCRIPT_URL missing.' }
  }

  // Remove quotes and whitespace
  SCRIPT_URL = SCRIPT_URL.replace(/^["']|["']$/g, '').trim()

  // Simple email validation
  const emailStr = email.toString()
  if (!emailStr.includes('@') || !emailStr.includes('.')) {
    return { success: false, error: 'Invalid email format' }
  }

  try {
    const params = new URLSearchParams()
    params.append('email', emailStr)

    console.log(`Submitting email to: ${SCRIPT_URL.substring(0, 30)}...`)
    
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      body: params.toString(), // Convert to string to be safe with all fetch implementations
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow',
      cache: 'no-store'
    })

    if (!response.ok) {
      const errorText = await response.text().catch(() => 'No error body')
      console.error(`Waitlist Error: status ${response.status}`, errorText)
      return { success: false, error: `Script returned ${response.status}` }
    }

    return { success: true }
  } catch (err) {
    console.error('Waitlist submission exception:', err)
    return { success: false, error: err instanceof Error ? err.message : 'Fetch failed' }
  }
}


