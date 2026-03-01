import cors from 'cors'
import express from 'express'
import { adminRouter } from './routes/admin.routes.js'
import { contactRouter } from './routes/contact.routes.js'
import { healthRouter } from './routes/health.routes.js'

const app = express()

app.use(cors())
app.use(express.json({ limit: '1mb' }))

app.use('/api', healthRouter)
app.use('/api', contactRouter)
app.use('/api', adminRouter)

app.use((_req, res) => {
  res.status(404).json({ error: 'Route not found.' })
})

export { app }
