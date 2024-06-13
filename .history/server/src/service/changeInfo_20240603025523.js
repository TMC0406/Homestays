
import db from "../models"
import bcrypt from "bcryptjs"
import {uploadToCloudinary } from "../service/uploadService"
export const changeInfo = async (req) => new Promise(async (resolve, reject) => {
    try {
        const { id, password,} = req.body
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
        console.log(avatar);
        // const result = await uploadToCloudinary(avatar);
        // console.log(result.url);
        // await user.update(
        //     {
        //         name : data.name,
        //         password: "",
        //         phone	: data.phone,
        //         zalo : data.zalo,
        //         avatar : "",
        //     }
        // );
    //    console.log(user);
        resolve(user);
    } catch (error) {
        reject(error);
    }
});