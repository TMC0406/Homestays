
import db from "../models"
export const changeInfoSevice  =({id,password,data})=> new Promise(async (resolve, reject) => {
    try {
        const user =  await db.User.findOne ({
            where: {id},
            raw: true
        })
        console.log(user);
        resolve(user)
    } catch (error) {
        reject(error);
    }
})