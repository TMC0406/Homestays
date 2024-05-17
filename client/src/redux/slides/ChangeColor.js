import { createSlice } from "@reduxjs/toolkit";
export const changeColor = createSlice({
  name: "color",
  initialState: {
    activeItem: 1,
  },
  reducers: {
    handleHeaderActive: (state, action) => {
      state.activeItem += action.payload;
    }
  }
});
export const {handleHeaderActive} = changeColor.actions;
export default changeColor.reducer;
