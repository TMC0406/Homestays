
import db from "../models"
import bcrypt from "bcryptjs"
import {uploadToCloudinary } from "../service/uploadService"
export const changeInfo = async (req) => new Promise(async (resolve, reject) => {
    try {
        const { id, password, username,zalo} = req.body
        const  avatar = req.file
        const user = await db.User.findOne({
            where: { id },
            raw: true
        });
        if (!user) {
            reject({ message: 'User not found' });
            return;
        }
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
            reject({ message: 'Invalid password' });
            return;
        }
        // console.log(data);
        // console.log(avatar);
        let newAvatar = ''
        if(avatar){
            const result = await uploadToCloudinary(avatar);
            newAvatar = result.url
        }
        console.log("url" + newAvatar);
        await user.update(
            {   
                id: id ? id : user.id, 
                password: password ? password : user.password, 
                phone: data.phone ? data.phone : user.phone,
                zalo: data.zalo ? data.zalo : user.zalo, 
                avatar: newAvatar ? newAvatar : user.avatar, 
            }
        );
       console.log(user);
        resolve(user);
    } catch (error) {
        reject(error);
    }
});