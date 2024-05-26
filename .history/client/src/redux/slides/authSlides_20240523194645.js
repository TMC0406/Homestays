import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import {apiRegister} from "../../service/auth"


// Tạo một async thunk cho việc đăng ký
export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (payload, { rejectWithValue }) => {
      try {
        const response = await apiRegister(payload);
        return response.token; // giả sử token nằm trong response.data.token
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
export const authSlides = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    token: null,
    msg: ''
  },
  reducers: {
    register: (state, action) => {
        state.isLoggedIn = true
        state.token = action.payload
        state.data = action.payload
        apiRegister(action.payload)  
      },
  }
});
export const {register} = authSlides.actions;
export default authSlides.reducer;
