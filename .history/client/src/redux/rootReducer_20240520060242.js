import { combineReducers } from 'redux';
import configNavSlice from './slides/configNavSlice';

const rootReducer = combineReducers({
    configNavSlice : configNavSlice
});

export default rootReducer;