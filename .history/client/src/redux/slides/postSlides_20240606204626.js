import { actionTypes } from "../actions/actionTypes";

const initState = {
    post: []
}

const postSlides = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_POSTS:
            return{
                ...state,
                posts: action.posts
            }
            break;
    
        default:
            return state;
    }
}

export default postSlides