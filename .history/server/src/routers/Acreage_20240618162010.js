import express from 'express'
import * as controller from '../controller/acreage'

const router = express.Router()

router.get('/all', controller.getAcreages)

export default router