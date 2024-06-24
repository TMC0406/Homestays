import * as service from '../service/category'

export const getCategories = async (req, res) => {
    try {
        const response = await service.getCategoriesSerivce()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at category controller: ' + error
        })
    }
}