import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: "searchSlide",
  initialState: {
    area: 'all',
    price: '',
    acreage: ''
  },
  reducers: {
    setFilterArea: (state, action) => {
        state.area = action.payload;
      },

  }
});

export const {setFilterArea } = searchSlice.actions;
export default searchSlice.reducer;