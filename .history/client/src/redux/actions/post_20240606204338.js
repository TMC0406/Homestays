import actionTypes from './actionTypes'
import { apiGetPosts } from '../../service/post'

export const getPosts = () => async (dispatch) => {
    try {
        const response = await apiGetPosts()
        console.log(response);
        // if (response?.data.error === 0) {
        //     dispatch({
        //         type: actionTypes.REGISTER_SUCCESS,
        //         data: response.data.token
        //     })
        // }else{
        //     dispatch({
        //         type: actionTypes.REGISTER_FAIL,
        //         data: response.data.msg
        //     })
        // }
    } catch (error) {
        dispatch({
            type: actionTypes.REGISTER_FAIL,
            data: null
        })
    }
}