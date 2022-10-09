import { ANNOUNCEMENTS } from "../shared/announcement";
import * as ActionTypes from "./ActionTypes";

export const Announcements = (state = ANNOUNCEMENTS, action) => {
    switch (action.type){
        case ActionTypes.ADD_ANNOUNCEMENT:
            var announcement = action.payload;
            announcement.id = state.length;
            announcement.date = new Date().toISOString();
            return state.concat(announcement);
        default:
            return state;
    }
}