import express from 'express'
import * as postController from '../controller/post'
const upload = multer();
const router = express.Router()
router.get('/all' ,upload.none(), postController.getPosts)

export default router