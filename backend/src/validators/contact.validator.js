function toText(value) {
  return typeof value === 'string' ? value.trim() : ''
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactPayload(payload = {}) {
  const name = toText(payload.fullName || payload.name)
  const email = toText(payload.email)
  const message = toText(payload.automationGoal || payload.message)
  const businessName = toText(payload.businessName) || null
  const phone = toText(payload.phone) || null
  const businessType = toText(payload.businessType) || null

  const errors = []

  if (!name) errors.push('name/fullName is required.')
  if (!email) {
    errors.push('email is required.')
  } else if (!emailRegex.test(email)) {
    errors.push('email must be a valid email address.')
  }
  if (!message) errors.push('message/automationGoal is required.')

  return {
    errors,
    value: {
      name,
      email,
      message,
      businessName,
      phone,
      businessType,
    },
  }
}
