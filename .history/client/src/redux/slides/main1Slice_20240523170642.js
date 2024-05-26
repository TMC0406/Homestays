import { createSlice } from '@reduxjs/toolkit'

const initialActiveItem = Number(localStorage.getItem('activeItem')) || 1;
const initialActiveItemNav = Number(localStorage.getItem('activeItemNav')) || 1;
export const main1Slice = createSlice({
  name: "main1",
  initialState: {
    activeItem: initialActiveItem,
    activeItemNav : initialActiveItemNav,
    data : {}
  },
  reducers: {
    setActiveItem: (state, action) => {
      state.activeItem = action.payload;
      localStorage.setItem('activeItem', action.payload); // Cập nhật localStorage mỗi khi giá trị thay đổi
    },
    setActiveItemNav: (state, action) => {
      state.activeItemNav = action.payload;
      localStorage.setItem('activeItemNav', action.payload); // Cập nhật localStorage mỗi khi giá trị thay đổi
    },
    register: (state, action) => {
      state.data = action.payload;
    },

  }
});

export const { setActiveItem, setActiveItemNav ,register} = main1Slice.actions;
export default main1Slice.reducer;