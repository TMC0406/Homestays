import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
      isLoggedIn: false,
      token: null,
      msg: '',
      error: null
    },
    reducers: {
      registerStart: (state) => {
        state.isLoggedIn = false;
        state.token = null;
        state.msg = 'Đang đăng ký...';
        state.error = null;
      },
      registerSuccess: (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload;
        state.msg = 'Đăng ký thành công';
        state.error = null;
      },
      registerFailure: (state, action) => {
        state.isLoggedIn = false;
        state.token = null;
        state.msg = 'Đăng ký thất bại';
        state.error = action.payload;
      }
    }
  });
  
  export const { registerStart, registerSuccess, registerFailure } = authSlice.actions;
  
  export default authSlice.reducer;