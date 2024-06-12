import * as actionTypes from './actionTypes.js'
import { apiGetPosts } from '../../service/post'

export const getPosts = () => async (dispatch) => {
    try {
        const response = await getPosts();
        dispatch({
            type: actionTypes.GET_POSTS,
            payload: response
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_POSTS,
            posts: null
        })
    }
}
