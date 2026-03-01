import { ContactRequest } from '../models/contactRequest.model.js'
import { validateContactPayload } from '../validators/contact.validator.js'

export async function createContactRequest(req, res) {
  try {
    const { errors, value } = validateContactPayload(req.body)

    if (errors.length > 0) {
      return res.status(400).json({
        error: 'Validation failed.',
        details: errors,
      })
    }

    const created = await ContactRequest.create(value)
    return res.status(201).json({
      status: 'received',
      id: created._id,
    })
  } catch (_error) {
    return res.status(500).json({ error: 'Failed to save contact request.' })
  }
}
