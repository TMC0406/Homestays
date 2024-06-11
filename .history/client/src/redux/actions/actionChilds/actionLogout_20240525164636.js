import {actionTypes} from '../actionTypes'
import { apiRegister, apiLogin } from '../../../service/auth'

export const logout = () => ({
    type: actionTypes.LOGOUT
})

// export default logout