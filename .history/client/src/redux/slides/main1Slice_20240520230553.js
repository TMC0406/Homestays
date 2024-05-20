import { createSlice } from "@reduxjs/toolkit";

const initialActiveItem = Number(localStorage.getItem('activeItem')) || 1;

export const main1Slice = createSlice({
  name: "main1",
  initialState: {
    activeItem: initialActiveItem
  },
  reducers: {
    setActiveItem: (state, action) => {
      state.activeItem = action.payload;
    },
  }
});

export const { setActiveItem } = main1Slice.actions;
export default main1Slice.reducer;