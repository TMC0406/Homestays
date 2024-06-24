import * as actionTypes from './actionTypes.js'
import { apiGetCategories } from '../../service/category.js';

export const getCategories = () => async (dispatch) => {
    try {
        const response = await apiGetCategories()
        console.log(response);
        // if (response?.data.error === 0) {
        //     dispatch({
        //         type: actionTypes.GET_POSTS,
        //         posts: response.data.response
        //     })
        // }else{
        //     dispatch({
        //         type: actionTypes.GET_POSTS,
        //         msg: response.data.msg
        //     })
        // }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_CATEGORY,
            posts: null
        })
    }
}