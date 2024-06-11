import db from '../models'

//get all category
export const getCategorysService =  () => new Promise(async(resolve, reject) => {
    try {
        const response = await db.Category.findAll({raw: true})
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'Ok' : 'Fail to get category',
            resolve
        })
    } catch (error) {
        reject()
    }
})