import { createStore, combineReducers } from "redux";
import { Placements } from "./placements";
import { Toppers } from "./toppers";
import { Posts } from "./posts";
import { Announcements } from "./announcement";

export const ConfigureStore = () =>{
    const store = createStore(
        combineReducers({
            placements: Placements,
            toppers: Toppers,
            posts: Posts,
            announcements: Announcements
        })
    );
    return store
}