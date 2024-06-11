// store.js
import { configureStore } from "@reduxjs/toolkit";

import rootReducer from './rootReducer'; // Bạn sẽ tạo rootReducer sau
export const store = configureStore(
  {
    reducer: {
      reducer: rootReducer
   }
  });

