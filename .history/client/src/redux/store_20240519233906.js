// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // Bạn sẽ tạo rootReducer sau

const store = configureStore({
  reducer: rootReducer,
});

export default store;