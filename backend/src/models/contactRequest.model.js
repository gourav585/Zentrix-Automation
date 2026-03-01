import mongoose from 'mongoose'

const contactRequestSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    message: { type: String, required: true, trim: true },
    businessName: { type: String, default: null, trim: true },
    phone: { type: String, default: null, trim: true },
    businessType: { type: String, default: null, trim: true },
  },
  { timestamps: true },
)

export const ContactRequest = mongoose.model('ContactRequest', contactRequestSchema)
