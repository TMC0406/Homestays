import { combineReducers } from 'redux';
import authReducer from './slides/authReducer'
// import userReducer from './features/user/userSlice';

const rootReducer = combineReducers({
//   user: userReducer,
    authReducer: authReducer
});

export default rootReducer;