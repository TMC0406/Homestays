// store.js
// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // Mặc định là localStorage
// import rootReducer from './rootReducer'; // Đường dẫn tới reducer gốc của bạn

// // Cấu hình persist
// const persistConfig = {
//   key: 'root',
//   storage,
// };

// // Tạo persistedReducer từ persistConfig và rootReducer
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // Cấu hình store với persistedReducer
// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false, // Tắt kiểm tra tuần tự hóa để tránh lỗi với redux-persist
//     }),
// });

// Tạo persistor từ store
// store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './rootReducer'; // Bạn sẽ tạo rootReducer sau
export const store = configureStore({
  reducer: {
    reducer: rootReducer
  }
});