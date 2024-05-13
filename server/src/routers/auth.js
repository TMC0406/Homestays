import express from 'express'


const router = express.Router()
router.get('/login', (req, res) => {
    res.send('Đăng nhập thành công')
})

export default router