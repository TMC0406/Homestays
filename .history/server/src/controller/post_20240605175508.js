import * as postService from '../service/post'

export const gestPosts = async(req, res) => {
    try {
        const response = await postService.getPostsService()
        return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json({
        err: -1,
        msg: 'Fail at post Controller' + error
      })
    }
}