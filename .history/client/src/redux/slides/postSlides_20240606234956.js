import {GET_POSTS} from '../actionTypes.js'

const initState = {
    post: []
}

const postSlides = (state = initState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return{
                ...state,
                posts: action.posts || []
            }
        default:
            return state;
    }
}

export default postSlides