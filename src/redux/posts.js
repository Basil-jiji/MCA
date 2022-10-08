import { POSTS } from "../shared/posts";

export const Posts = (state = POSTS, action) => {
    switch (action.type){
        default:
            return state;
    }
}