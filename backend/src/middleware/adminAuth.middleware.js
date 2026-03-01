import { env } from '../config/env.js'

export function adminAuth(req, res, next) {
  if (!env.adminKey) return next()

  const requestKey = (req.header('x-admin-key') || '').trim()
  if (requestKey !== env.adminKey) {
    return res.status(401).json({ error: 'Unauthorized admin request.' })
  }

  return next()
}
