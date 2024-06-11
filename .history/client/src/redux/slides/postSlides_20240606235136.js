import * as actionTypes  from "../actions/actionTypes.js";

const initState = {
    post: []
}

const postSlides = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_POSTS:
            return{
                ...state,
                posts: action.posts || []
            }
        default:
            return state;
    }
}

export default postSlides