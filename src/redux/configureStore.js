import { createStore, combineReducers, applyMiddleware } from "redux";
import { InitialFeedback } from "./feedback";
import { createForms } from "react-redux-form";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Placements } from "./placements";
import { Toppers } from "./toppers";
import { Posts } from "./posts";
import { Announcements } from "./announcement";
import { InitialPrayaana } from "./prayaana";

export const ConfigureStore = () =>{
    const store = createStore(
        combineReducers({
            placements: Placements,
            toppers: Toppers,
            posts: Posts,
            announcements: Announcements,
            ...createForms({
                feedback: InitialFeedback,
                prayaana: InitialPrayaana
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store
}