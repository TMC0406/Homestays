import db from "../models"
import bcrypt from "bcryptjs"
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';
import choThueCanHo from '../../data/choThueCanHo.json'
import generateCode from "../ultis/generateCode";
import { JSON } from "sequelize";
dotenv.config();

const dataBody = choThueCanHo.body
const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10))

//Hàm để tạo data trên bảng
export const insertService = () => new Promise(async(resolve, reject) => {
    try{
        dataBody.forEach(async (item)=>{
            let postId = uuidv4()
            let labelCode = generateCode(5)
            let attributesId = uuidv4()
            let userId = uuidv4()
            let overviewId = uuidv4()
            let imagesId = uuidv4()
            await db.Post.create({
                id: postId,
                title: item?.header?.title,
                start: item?.header?.star,
                labelCode,
                address: item?.header?.address,
                attributesId,
                categoryCode: 'ChoThueCanHo',
                description: JSON.stringify(item?.mainContent?.content),
                userId,
                overviewId,
                imagesId,
            })
            await db.Attribute.create({
                id: attributesId,
                price: item?.header?.attributes?.price,
                acreage: item?.header?.attributes?.acreage,
                published: item?.header?.attributes?.published,
                hashtag: item?.header?.attributes?.hashtag,
            })
        })

        resolve()
    }catch(error){
        reject(error)
    }
})