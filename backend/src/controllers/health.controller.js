import { getDatabaseState } from '../config/database.js'

export function getHealth(_req, res) {
  res.json({
    status: 'ok',
    service: 'zentrix-backend',
    dbState: getDatabaseState(),
    timestamp: new Date().toISOString(),
  })
}
