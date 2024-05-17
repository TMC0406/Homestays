import express from 'express'
import * as authController from "../controller/auth"


const router = express.Router()
// router.post('/register', authController.register) 
router.post('/register',(req, res) => {
    const {name, phone, password} = req.body
    try{
        res.send('heloooo' + " " + name)

        // if (!name || !phone || !password) return res.status(400).json({
        //     err: 1, //Lỗi số dương thì là lỗi Client còn 0 là thành công
        //     msg: 'Missing input!'
        // })
        // const response =  await authService.registerService(req.body) 
        // return res.status(200).json(response)
    }catch(error) {
        return res.status(500).json({
            err: -1, //Lỗi số âm là lỗi Server còn 0 là thành công
            msg: "Fall at controller: " + error
        })
    }
}) 


export default router