import * as postService from '../service/post'

export const getPosts = async(req, res) => {
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

export const getFilterPrice = async(req, res) => {
  const {query} = req.query
  try {
      const response = await postService.filterPrices(query)
      return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at post Controller' + error
    })
  }
}