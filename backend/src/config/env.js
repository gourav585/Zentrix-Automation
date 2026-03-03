import 'dotenv/config'

function clean(value) {
  return typeof value === 'string' ? value.trim() : ''
}

const mongoUri = clean(process.env.MONGODB_URI)

if (!mongoUri) {
  throw new Error('MONGODB_URI is missing. Add it to backend/.env before starting the server.')
}

if (mongoUri.includes('<db_password>')) {
  throw new Error('Replace <db_password> in backend/.env MONGODB_URI with your real MongoDB password.')
}

export const env = {
  nodeEnv: clean(process.env.NODE_ENV) || 'development',
  port: Number(clean(process.env.PORT) || 5000),
  mongodbUri: mongoUri,
  adminKey: clean(process.env.ADMIN_KEY) || '',
  corsOrigin: clean(process.env.CORS_ORIGIN),
}
