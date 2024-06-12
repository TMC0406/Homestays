import * as actionTypes from './actionTypes.js'
import { apiGetPosts, apiGetPostsLimit } from '../../service/post'

export const getPosts = () => async (dispatch) => {
    try {
        const response = await apiGetPosts()

        console.log(response);
        if (response?.data.error === 0) {
            dispatch({
                type: actionTypes.GET_POSTS,
                posts: response.data.response
            })
        }else{
            dispatch({
                type: actionTypes.GET_POSTS,
                msg: response.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_POSTS,
            posts: null
        })
    }
}

export const getPostsLimit = (page) => async (dispatch) => {
    try {
        const response = await apiGetPostsLimit(page)

        console.log(response);
        if (response?.data.error === 0) {
            dispatch({
                type: actionTypes.GET_POSTS,
                posts: response.data.response
            })
        }else{
            dispatch({
                type: actionTypes.GET_POSTS,
                msg: response.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_POSTS,
            posts: null
        })
    }
}