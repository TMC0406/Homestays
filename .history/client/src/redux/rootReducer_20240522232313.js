// import { combineReducers } from 'redux';
// import userSlides from './slides/userSlides';


// const rootReducer = combineReducers({
//     userSlides: userSlides
// });

// export default rootReducer;

import authSlides from "./slides/authSlides";
import userSlides from "./slides/userSlides";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"
import autoMergeLever2 from "redux-persist/es/stateReconciler/autoMergeLevel2"
import {persisReducer} from "redux-persist"

const commonConfig = {
    storage,
    stateReconciler: autoMergeLever2
}

const authConfig = {
    ...commonConfig,
    key: 'auth',
    whitelist: ['isLoggedIn', 'token']
}

const rootReducer = combineReducers({
    auth: persisReducer(authConfig, authSlides),
    user: userSlides
})

export default rootReducer