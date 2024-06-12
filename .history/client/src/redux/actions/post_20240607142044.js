import * as actionTypes from './actionTypes.js'
import { apiGetPosts } from '../../service/post'

export const getPosts = () => async (dispatch) => {
    // console.log( "okkkkkk");
    // try {
    //     const response = await apiGetPosts()

    //     console.log(response);
    //     if (response?.data.error === 0) {
    //         dispatch({
    //             type: actionTypes.GET_POSTS,
    //             posts: response.data.response
    //         })
    //     }else{
    //         dispatch({
    //             type: actionTypes.GET_POSTS,
    //             msg: response.data.msg
    //         })
    //     }
    // } catch (error) {
    //     dispatch({
    //         type: actionTypes.GET_POSTS,
    //         posts: null
    //     })
    // }
}

