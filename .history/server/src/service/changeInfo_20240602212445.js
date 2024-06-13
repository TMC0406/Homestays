
import db from "../models"
import bcrypt from "bcryptjs"
export const changeInfo = async ({ id, password, data }) => new Promise(async (resolve, reject) => {
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
       console.log(user);
        resolve(user);
    } catch (error) {
        reject(error);
    }
});