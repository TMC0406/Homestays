import express from 'express'
import * as controller from '../controller/category'

const router = express.Router()

router.get('/all', controllers.getCategories)

export default router