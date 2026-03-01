import { app } from './app.js'
import { connectDatabase } from './config/database.js'
import { env } from './config/env.js'

async function startServer() {
  await connectDatabase()
  app.listen(env.port, () => {
    console.log(`Backend running on http://localhost:${env.port}`)
  })
}

startServer().catch((error) => {
  console.error('Startup error:', error.message)
  process.exit(1)
})
