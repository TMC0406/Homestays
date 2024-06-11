import db from '../models'

export const getPostsService = () => new Promise(async(resolve, reject) => {
    try {
        const response = await db.Post.findAll({
            raw: true,
            nest: true,
            include: [
                { model: db.Image, as: 'images', attributes: ['image'] },
                { model: db.Attribute, as: 'attributes', attributes: ['price', 'acreage', 'published', 'hashtag'] },
                { model: db.User, as: 'users', attributes: ['name', 'phone', 'zalo'] },
            ],
            attributes: ['id', 'title', 'address', 'description', 'attributes']
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? "Ok" : "Getting posts is Fail",
            response : response,
        })
    } catch (error) {
        reject(error)
    }
})