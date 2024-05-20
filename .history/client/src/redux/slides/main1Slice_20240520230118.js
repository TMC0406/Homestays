import { createSlice } from "@reduxjs/toolkit";
export const main1Slice = createSlice({
  name: "main1",
  initialState: {
    activeItem : 1
  },
  reducers: {
    setActiveItem: (state, action) => {
      state.activeItem = action.payload;
    },
  }
});
export const {setActiveItem} = main1Slice.actions;
export default main1Slice.reducer;
