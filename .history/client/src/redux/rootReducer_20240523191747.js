import { combineReducers } from 'redux';
import main1Slice from './slides/main1Slice';
import authSlides from './slides/authSlides';
const rootReducer = combineReducers({
    main1 : main1Slice,
    auth : authSlides
})
export default rootReducer;