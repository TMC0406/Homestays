import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 69
  },
  reducers: {
    increment: (state, action) => {
      state.counter += action.payload;
    },
    decrement: (state, action) => {
      state.counter -= action.payload;
    }
  }
});
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
