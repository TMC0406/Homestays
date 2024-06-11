import actionTypes from '../actionTypes'
import { apiRegister, apiLogin } from '../../../service/auth'

const logout = () => ({
    type: actionTypes.LOGOUT
})

export default logout