import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
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
        }),
        applyMiddleware(thunk, logger)
    );
    return store
}