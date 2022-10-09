import * as ActionTypes from './ActionTypes'

export const addAnnouncement = (title, message) =>({
    type: ActionTypes.ADD_ANNOUNCEMENT,
    payload:{
        title: title,
        message: message
    }

});