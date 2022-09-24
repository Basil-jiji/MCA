import { TOPPERS } from "../shared/toppers";
import { PLACEMENTS } from "../shared/placements";
import { ANNOUNCEMENTS } from "../shared/announcement";
import { POSTS } from "../shared/posts";

export const initialState = {
    toppers: TOPPERS,
    placements: PLACEMENTS,
    announcements: ANNOUNCEMENTS,
    posts: POSTS    
}

export const Reducer = (state = initialState, action) => {
    return state
}
