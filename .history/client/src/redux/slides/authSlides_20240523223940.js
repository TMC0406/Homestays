import { createSlice } from "@reduxjs/toolkit";
export const authSlides = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    token: null,
    msg: '',
    err : ""
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
          state.token = action.payload.token;
          state.msg = 'Đăng ký thành công';
          state.error = null;
        },
        registerFailure: (state, action) => {
          state.isLoggedIn = false;
          state.token = null;
          state.msg = 'Đăng ký thất bại';
          state.error = action.payload.err;
        }
      }
});
export const {registerStart ,registerSuccess,registerFailure} = authSlides.actions;
export default authSlides.reducer;
