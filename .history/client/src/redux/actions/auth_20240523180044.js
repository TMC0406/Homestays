import actionTypes from './actionTypes'
import { apiRegister } from '../../service/auth'

const register = (payload) => async (dispatch) => {
    try {
        const response = await apiRegister(payload)
        if (response?.data.error === 0) {
            dispatch({
                type: actionTypes.REGISTER_SUCCESS,
                data: response.data.token
            })
        }else{
            dispatch({
                type: actionTypes.REGISTER_FAIL,
                data: response.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.REGISTER_FAIL,
            data: null
        })
    }
}
// const register = (payload) => {
//     console.log(payload);
// }

export default register