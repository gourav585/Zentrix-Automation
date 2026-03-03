function cleanBaseUrl(value) {
  if (typeof value !== 'string') return ''
  return value.trim().replace(/\/+$/, '')
}

export function getApiBaseUrl() {
  const fromEnv = cleanBaseUrl(import.meta.env.VITE_API_BASE_URL)
  if (fromEnv) return fromEnv

  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    return 'http://localhost:5000'
  }

  return ''
}
