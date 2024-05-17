import db from "../models"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import {v4} from "uuidv4"
require('dotenv').config()


const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10))
export const registerService = (name, phone, password) => new Promise(async(resolve, reject) => {
    try{
        const response = await db.User.findOrCreate({
            where: {phone: body.phone},
            defaults: {
                phone, 
                name,
                password: hashPassword(password),
                id: v4()
            }
        })
        const token = response[1] && jwt.sign({id: response[0].id, phone: response[0].phone}, process.env.SECRET_KEY, {expiresIn: '1d'})
        resolve({
            err: token ? 0 : 2,
            msg: token ? 'Đăng kí thành công' : 'Tài khoản đã tồn tại',
            token: token || null
        })

    }catch(error){
        reject(error)
    }
})