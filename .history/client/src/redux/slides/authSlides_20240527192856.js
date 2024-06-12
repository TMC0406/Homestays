import {actionTypes} from "../actions/actionTypes";

const initState = {
   isLoggedIn: false,
   token: null,
   msg: '',
   username : "",
   phone : ""
  }
  
  const authSlides = (state = initState, action) => {
    switch (action.type) {
      case actionTypes.REGISTER_SUCCESS:
      case actionTypes.LOGIN_SUCCESS:
        console.log(action);
        return{
            ...state,
            isLoggedIn: true,
            token: action.data.token,
            username : action.data.username,
            phone : action.data.phone,
            msg: ''
        }
      case actionTypes.REGISTER_FAIL:
      case actionTypes.LOGIN_FAIL:
            return{
                ...state,
                isLoggedIn: false,
                msg: action.data,
                token: null,
                msg: ''
            }
      case actionTypes.LOGOUT:
        return{
          ...state,
          isLoggedIn: false,
          token: null,
          msg: ''
        }
      default:
        return state;
    }
  }
  
  export default authSlides