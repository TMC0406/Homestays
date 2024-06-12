import actionTypes from "../action/actionTypes";

const initState = {
   isLoggedIn: false,
   token: null,
   msg: ''
  }
  
  const authSlides = (state = initState, action) => {
    switch (action.type) {
      case actionTypes.REGISTER_SUCCESS:
        return{
            ...state,
            isLoggedIn: true,
            token: action.data
        }
        case actionTypes.REGISTER_FALL:
            return{
                ...state,
                isLoggedIn: false,
                msg: action.data
            }
    
      default:
        return state;
    }
  }
  
  export default authSlides