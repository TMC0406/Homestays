import db from '../models'

export const getPricesSerivce = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Price.findAll({
            raw: true,
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Failed to get categories.',
            response
        })
    } catch (error) {
        reject(error)
    }
})