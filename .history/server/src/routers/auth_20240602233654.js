import express from 'express'
const multer = require('multer');
const upload = multer();
import * as authController from "../controller/auth"
import * as changeInfoController from "../controller/changeInfo"

const router = express.Router()
router.post('/register' ,upload.none(),  authController.register) 
router.post('/login' ,upload.none(),  authController.login) 
router.post('/changeInfo' , upload.single('avatar'),changeInfoController.changeInfo) 
export default router