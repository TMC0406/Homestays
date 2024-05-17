import express from 'express'
import * as authController from "../controller/auth"
const router = express.Router()
router.post('/register' , upload.none(), authController.register) 




export default router