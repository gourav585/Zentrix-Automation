import { Router } from 'express'
import { deleteAdminRequest, getAdminRequests } from '../controllers/admin.controller.js'
import { adminAuth } from '../middleware/adminAuth.middleware.js'

const adminRouter = Router()

adminRouter.get('/admin/requests', adminAuth, getAdminRequests)
adminRouter.delete('/admin/requests/:id', adminAuth, deleteAdminRequest)

export { adminRouter }
