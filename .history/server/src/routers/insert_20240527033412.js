import express from 'express'
const multer = require('multer');
const upload = multer();
import * as insertService from "../controller/insert"

const router = express.Router()




export default router