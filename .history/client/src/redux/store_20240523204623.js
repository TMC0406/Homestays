// store.js
import { configureStore} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';
// Cấu hình persist
const persistConfig = {
  key: 'root',
  // storage,
  whitelist: ['main1', 'auth'],
};
// Tạo persistedReducer từ persistConfig và rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
// Cấu hình store với persistedReducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Tắt kiểm tra tuần tự hóa để tránh lỗi với redux-persist
    }),
});
// Tạo persistor từ store
const persistor = persistStore(store);
export { store, persistor };