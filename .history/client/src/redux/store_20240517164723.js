import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slides/couterSlides";
import ChangeColor from "./slides/ChangeColor";
export const store = configureStore({
  reducer: {
    counterSlice: counterSlice,
    ChangeColor: ChangeColor
  }
});
