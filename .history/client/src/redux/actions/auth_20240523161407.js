import actionType from './actionTypes'
import { apiRegister } from '../../service/auth'

export const register = (payload) => async (dispatch) => {
    try {
        const response = await apiRegister(payload)
        console.log(response);
        if (response?.data.error === 0) {
            dispatch({
                type: actionType.REGISTER_SUCCESS,
                data: response.data.token
            })
        }else{
            dispatch({
                type: actionType.REGISTER_FALL,
                data: response.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionType.REGISTER_FALL,
            data: null
        })
    }
}