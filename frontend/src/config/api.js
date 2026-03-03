function cleanBaseUrl(value) {
  if (typeof value !== 'string') return ''
  return value.trim().replace(/\/+$/, '')
}

export function getApiBaseUrl() {
  const fromEnv = cleanBaseUrl(import.meta.env.VITE_API_BASE_URL)
  if (fromEnv) return fromEnv

  return 'https://zentrix-automation-backend.onrender.com'
}
