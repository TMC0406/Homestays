import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: "searchSlide",
  initialState: {
    area: 'all',
    minPrice: 0,
    maxPrice: 9999999999,
    minAcreage: 0,
    maxAcreage: 9999999999,
  },
  reducers: {
    setFilterArea: (state, action) => {
        state.area = action.payload;
      },
    setFilterPrice: (state, action) => {
        state.minPrice = action.payload.Min;
        state.maxPrice = action.payload.Max;
    },
    setFilterAcreage: (state, action) => {
        state.minAcreage = action.payload.Min;
        state.maxAcreage = action.payload.Max;
    },
  }
});

export const {setFilterArea, setFilterPrice, setFilterAcreage } = searchSlice.actions;
export default searchSlice.reducer;