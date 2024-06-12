import express from 'express'
const multer = require('multer');
const upload = multer();
import * as authController from "../controller/auth"

const router = express.Router()
router.post('/register' ,upload.none(),  authController.register) 
router.post('/login' ,upload.none(),  authController.login) 
router.post('/changeInfo' ,upload.none(), (res,req)=>{ 
    console.log(res, req
    );
}) 



export default router