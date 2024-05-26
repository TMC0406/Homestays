import { createSlice } from "@reduxjs/toolkit";
import {apiRegister} from "../../service/auth"
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
        state.data = action.payload
        state.token = "sc;c;zsc"
        apiRegister(action.payload)  
      },
  }
});
export const {register} = authSlides.actions;
export default authSlides.reducer;


// case actionTypes.REGISTER_SUCCESS:
// return{
//     ...state,
//     isLoggedIn: true,
//     token: action.data
// }
// case actionTypes.REGISTER_FAIL:
//     return{
//         ...state,
//         isLoggedIn: false,
//         msg: action.data,
//         token: null
//     }