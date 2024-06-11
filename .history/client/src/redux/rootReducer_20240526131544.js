import { combineReducers } from 'redux';
import storage from "redux-persist/lib/storage"
import {persistReducer } from "redux-persist"

import authSlides from "./slides/authSlides";
import userSlides from "./slides/userSlides";
import main1Slice from './slides/main1Slice';
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2"

const commonConfig = {
    storage,
    stateReconciler: autoMergeLevel2
}
const authConfig = {
    ...commonConfig,
    key: 'auth',
    whitelist: ['isLoggedIn', 'token']
}
const rootReducer = combineReducers({
    auth: persistReducer (authConfig, authSlides),
    user: userSlides,
    main1 : main1Slice
})
export default rootReducer