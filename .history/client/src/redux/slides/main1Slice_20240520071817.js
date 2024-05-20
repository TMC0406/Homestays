import { createSlice } from "@reduxjs/toolkit";
export const main1Slice = createSlice({
  name: "counter",
  initialState: {

  },
  reducers: {
    increment: (state, action) => {
      state.counter += action.payload;
    },
  }
});
export const {} = main1Slice.actions;
export default main1Slice.reducer;
