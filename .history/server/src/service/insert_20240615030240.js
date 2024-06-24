import db from "../models"
import bcrypt from "bcryptjs"
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';
import choThueCanHo from '../../data/choThueCanHo.json'
import choThuePhongTro from '../../data/choThuePhongTro.json'
import nhaChoThue from '../../data/nhaChoThue.json'
import generateCode from "../ultis/generateCode";
import { where } from "sequelize";
dotenv.config();


const dataBody = choThueCanHo.body
// const dataBody = choThuePhongTro.body
// const dataBody = nhaChoThue.body
const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10))

//Hàm để tạo data trên bảng
export const insertService = () => new Promise(async(resolve, reject) => {
    try{
        dataBody.forEach(async (item)=>{
            let postId = uuidv4()
            let labelCode = generateCode( item?.header?.class?.classType)
            let attributesId = uuidv4()
            let userId = uuidv4()
            let overviewId = uuidv4()
            let imagesId = uuidv4()
            await db.Post.create({
                id: postId,
                title: item?.header?.title,
                star: item?.header?.star,
                labelCode,
                address: item?.header?.address,
                attributesId,
                categoryCode: 'ChoThueCanHo',
                categoryCode: 'ChoThuePhongtro',
                categoryCode: 'NhaChoThue',
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
            await db.Image.create({
                id:imagesId,
                image: JSON.stringify(item?.images)
            })
            await db.Label.findOrCreate({
               where: {code: labelCode},
               defaults: {
                code:labelCode,
                value: item?.header?.class?.classType
               }
            })
            await db.Overview.create({
                id:overviewId,
                code: item?.overview?.content.find(i => i.name === "Mã tin:")?.content,
                area: item?.overview?.content.find(i => i.name === "Khu vực")?.content,
                type: item?.overview?.content.find(i => i.name === "Loại tin rao:")?.content,
                target: item?.overview?.content.find(i => i.name === "Đối tượng thuê:")?.content,
                bonus: item?.overview?.content.find(i => i.name === "Gói tin:")?.content,
                created: item?.overview?.content.find(i => i.name === "Ngày đăng:")?.content,
                expire: item?.overview?.content.find(i => i.name === "Ngày hết hạn:")?.content,
            })
            await db.User.create({
                id: userId,
                name: item?.contact?.content.find(i => i.name === 'Liên hệ:')?.content,
                password: hashPassword('123456'),
                phone: item?.contact?.content.find(i => i.name === 'Điện thoại:')?.content,
                zalo: item?.contact?.content.find(i => i.name === 'Zalo')?.content,
            })
        })

        resolve('Đã tạo xong')
    }catch(error){
        reject(error)
    }
})