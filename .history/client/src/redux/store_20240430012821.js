import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slides/couterSlides";
export const store = configureStore({
  reducer: {
    counterSlice: counterSlice
  }
});
