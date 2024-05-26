import { createSlice } from "@reduxjs/toolkit";
import {apiRegister} from "../../service/auth"
export const authSlides = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    token: null,
    msg: ''
  },
  reducers: {
    register: (state, action) => {
        state.isLoggedIn = true
        state.token = action.payload
        state.data = action.payload
        apiRegister(action.payload)  
      },
  }
});
export const {register} = authSlides.actions;
export default authSlides.reducer;
