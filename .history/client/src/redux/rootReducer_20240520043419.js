import { combineReducers } from 'redux';
import authSlides from './slides/authSlides'

const rootReducer = combineReducers({
    authSlides: authSlides
});

export default rootReducer;