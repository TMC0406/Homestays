import express from 'express'
import * as authController from "../controller/auth"
import * as authService from "../service/auth"


const router = express.Router()
// router.post('/register', authController.register) 
router.post('/register', authService.registerService) 




export default router