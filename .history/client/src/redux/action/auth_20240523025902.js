import { type } from 'os'
import actionType from './actionTypes'

export const register = () => (dipatch) => {
    try {
        
    } catch (error) {
        dipatch({
            type: actionType.REGISTER
        })
    }
}