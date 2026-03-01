import { ContactRequest } from '../models/contactRequest.model.js'
import mongoose from 'mongoose'

function parsePositiveInt(value, fallback) {
  const parsed = Number.parseInt(String(value || ''), 10)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback
}

export async function getAdminRequests(req, res) {
  try {
    const page = parsePositiveInt(req.query.page, 1)
    const limit = Math.min(parsePositiveInt(req.query.limit, 50), 100)
    const skip = (page - 1) * limit

    const [requests, total] = await Promise.all([
      ContactRequest.find({})
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      ContactRequest.countDocuments({}),
    ])

    return res.json({
      page,
      limit,
      total,
      count: requests.length,
      requests,
    })
  } catch (_error) {
    return res.status(500).json({ error: 'Failed to fetch admin requests.' })
  }
}

export async function deleteAdminRequest(req, res) {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid request id.' })
    }

    const deleted = await ContactRequest.findByIdAndDelete(id)
    if (!deleted) {
      return res.status(404).json({ error: 'Request not found.' })
    }

    return res.json({ status: 'deleted', id })
  } catch (_error) {
    return res.status(500).json({ error: 'Failed to delete request.' })
  }
}
