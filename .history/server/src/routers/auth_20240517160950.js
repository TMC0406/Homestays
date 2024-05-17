import express from 'express'
const multer = require('multer');
const upload = multer();
import * as authController from "../controller/auth"
const router = express.Router()
router.post('/register', upload.none(), authController.register) 




export default router
