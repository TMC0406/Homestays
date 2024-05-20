import { createSlice } from "@reduxjs/toolkit";
export const configNavSlice = createSlice({
  name: "configNavSlice",
  initialState: {
    activeItem  : Number(localStorage.getItem('activeItem')) || 1
  },
  reducers: {
    setActiveItem: (state, action) => {
      state.activeItem = action.id;
    },
  }
});
export const { setActiveItem} = configNavSlice.actions;
export default configNavSlice.reducer;
