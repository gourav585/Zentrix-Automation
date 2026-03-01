import { Router } from 'express'
import { createContactRequest } from '../controllers/contact.controller.js'

const contactRouter = Router()

contactRouter.post('/contact', createContactRequest)

export { contactRouter }
