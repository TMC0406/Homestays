import { combineReducers } from 'redux';
import userSlides from './slides/userSlides';

const rootReducer = combineReducers({
    userSlides: userSlides
});

export default rootReducer;