import axiosConfig from "../axiosConfig"
import axios from 'axios'
export const apiRegister = (payload) => new Promise(async(resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: 'api/v1/auth/register',
            data: payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

// export const apiRegister = (payload) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const response = await axios.post('http://localhost:5000/api/v1/auth/register', payload);
//             resolve(response);
//         } catch (error) {
//             reject(error);
//         }
//     });
// };