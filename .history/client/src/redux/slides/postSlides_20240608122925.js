import {actionTypes} from "../actions/actionTypes";
const initState = {
    post: [],
    msg:'',
}

const postSlides = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_POSTS:
            case actionTypes.GET_POSTS_LIMIT: 
            return{
                ...state,
                posts: action.data.response || [],
                msg: action.data.msg || ''
            }
        default:
            return state;
    }
}

export default postSlides