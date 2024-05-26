// import { combineReducers } from 'redux';
// import userSlides from './slides/userSlides';


// const rootReducer = combineReducers({
//     userSlides: userSlides
// });

// export default rootReducer;

import authSlides from "./slides/authSlides";
import userSlides from "./slides/userSlides";
import { combineReducers } from 'redux';
import storage from "redux-persist/lib/storage"
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2"
import {persistReducer } from "redux-persist"

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
    user: userSlides
})

export default rootReducer