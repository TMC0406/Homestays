
import db from "../models"
export const changeInfo = ({ id, password, data }) => new Promise(async (resolve, reject) => {
    try {
        const user = await db.User.findOne({
            where: {id,password},
            raw: true
        });
        console.log(user);
        if (user) {
            resolve(user); 
        } else {
            reject({ message: 'User not found' }); 
        }
    } catch (error) {
        reject(error);
    }
});