import actionType from './actionTypes'
import { apiRegister } from '../../service/auth'

export const register = (payload) => async (dipatch) => {
    try {
        const response = await apiRegister(payload)
        console.log(response);
        if (response.data.error === 0) {
            dipatch({
                type: actionType.REGISTER_SUCCESS,
                data: response.data.token
            })
        }else{
            dipatch({
                type: actionType.REGISTER_FALL,
                data: response.data.msg
            })
        }
    } catch (error) {
        dipatch({
            type: actionType.REGISTER,
            data: null
        })
    }
}