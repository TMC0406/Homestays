import db from "../models"
import bcrypt from "bcryptjs"
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';
import choThueCanHo from '../../data/choThueCanHo.json'
dotenv.config();

const dataBody = choThueCanHo.body
const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10))

//Hàm để tạo data trên bảng
export const insertService = () => new Promise(async(resolve, reject) => {
    try{
        dataBody.forEach(async (item)=>{
            let postId = uuidv4()
            await db.Post.create({
                id: postId,
                title: item?.header?.title,
                start: item?.header?.star
            })
        })

        resolve()
    }catch(error){
        reject(error)
    }
})