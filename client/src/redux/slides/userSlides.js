import { createSlice } from "@reduxjs/toolkit";
export const userSlides = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isAuthenticated: false,
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    clearToken(state) {
      state.token = null;
      state.isAuthenticated = false;
    },
    setLogin(state, action) {
      state.token = action.payload;
    },
  }})
export const { setToken, clearToken, setLogin } = userSlides.actions;
export default userSlides.reducer;

