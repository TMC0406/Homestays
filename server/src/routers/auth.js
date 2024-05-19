import express from 'express';
const router = express.Router();
import multer from 'multer';
const upload = multer();
import * as authController from "../controller/auth.js"

router.post('/register', upload.none(), authController.register);
router.post('/login', upload.none(), authController.login);

export default router;