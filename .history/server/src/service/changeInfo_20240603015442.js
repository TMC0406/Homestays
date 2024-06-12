
import db from "../models"
import bcrypt from "bcryptjs"
import {uploadToCloudinary } from "../service/uploadService"
export const changeInfo = async ({ id, password, avatar}) => new Promise(async (resolve, reject) => {
    try {
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
        const result = await uploadToCloudinary(avatar);
        console.log(result.url);
        // await user.update(
        //     {
        //         name : data.name,
        //         password: "",
        //         phone	: data.phone,
        //         zalo : data.zalo,
        //         avatar : "",
        //     }
        // );
       console.log(user);
        resolve(user);
    } catch (error) {
        reject(error);
    }
});