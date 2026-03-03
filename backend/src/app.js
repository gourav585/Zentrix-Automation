import compression from 'compression'
import cors from 'cors'
import express from 'express'
import { env } from './config/env.js'
import { adminRouter } from './routes/admin.routes.js'
import { contactRouter } from './routes/contact.routes.js'
import { healthRouter } from './routes/health.routes.js'

const app = express()

const allowedOrigins = env.corsOrigin
  ? env.corsOrigin
      .split(',')
      .map((origin) => origin.trim())
      .filter(Boolean)
  : []

app.use(compression())
app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
      callback(null, true)
      return
    }
    callback(new Error('CORS origin not allowed'))
  },
}))
app.use(express.json({ limit: '1mb' }))

app.use('/api', healthRouter)
app.use('/api', contactRouter)
app.use('/api', adminRouter)

app.use((_req, res) => {
  res.status(404).json({ error: 'Route not found.' })
})

export { app }
