import * as services from '../service/category'

export const getCategorys = async (req, res) => {
    try {
        const response = await services.getCategorysService()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at Category controller: ' + error
        })
    }
}