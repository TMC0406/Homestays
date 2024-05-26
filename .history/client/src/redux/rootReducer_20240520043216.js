import { combineReducers } from 'redux';
import authReducer from './slides/authReducer'

const rootReducer = combineReducers({
    authReducer: authReducer
});

export default rootReducer;