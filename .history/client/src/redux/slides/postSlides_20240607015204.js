import * as actionTypes  from "../actions/actionTypes.js";

const initState = {
    post: [],
    msg:''
}

const postSlides = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_POSTS:
            return{
                ...state,
                posts: action.posts || [],
                msg: action.msg || ''
            }
        default:
            return state;
    }
}

export default postSlides