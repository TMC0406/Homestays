import { createSlice } from "@reduxjs/toolkit";
export const userSlides = createSlice({
  name: 'auth',
  initialState: {
    token: 'Cường đẹp trai đấy -)))',
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
  }})
export const { setToken, clearToken } = userSlides.actions;
export default userSlides.reducer;

