// store.js
import { configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';
// Cấu hình persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['main1', 'auth' ,'token'],
};
// Tạo persistedReducer từ persistConfig và rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
// Cấu hình store với persistedReducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Tắt kiểm tra tuần tự hóa để tránh lỗi với redux-persist
    }).concat(thunk),
});
// Tạo persistor từ store
const persistor = persistStore(store);
export { store, persistor };