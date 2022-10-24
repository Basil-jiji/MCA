import * as ActionTypes from './ActionTypes'

export const Posts = (state = {
    errMess: null,
    posts: []
}, action) => {
switch(action.type){
    case ActionTypes.ADD_POSTS:
        return { ...state, isLoading: false, errMess: null, posts: action.payload }

    case ActionTypes.POSTS_LOADING:
        return { ...state, isLoading: false, errMess: action.payload, posts: [] }

    case ActionTypes.ADD_POSTS:
        var post = action.payload;
        return {...state, compostsments: state.comments.concat(post) };

    default:
        return state;
}
}