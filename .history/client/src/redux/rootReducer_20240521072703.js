import { combineReducers } from 'redux';
import main1Slice from './slides/main1Slice';


const rootReducer = combineReducers({
    main1 : main1Slice
});

export default rootReducer;