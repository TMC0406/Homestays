import {actionTypes} from "../actions/actionTypes";

const initState = {
    msg:'',
    categories: []
}

const appSlide = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_CATEGORY:
            return{
                ...state,
                categories: action.categories || [],
                msg: action.msg || '',
            }
        default:
            return state;
    }
}

export default appSlide