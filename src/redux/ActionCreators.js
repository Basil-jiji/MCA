import * as ActionTypes from './ActionTypes'
import { TOPPERS } from "../shared/toppers";
import { PLACEMENTS } from "../shared/placements";

export const addAnnouncement = (title, message) =>({
    type: ActionTypes.ADD_ANNOUNCEMENT,
    payload:{
        title: title,
        message: message
    }

});

export const fetchToppers = () => (dispatch) =>{
    dispatch(toppersLoading(true));

    setTimeout(() => {
        dispatch(addToppers(TOPPERS));
    }, 2000);
}

export const toppersLoading = () => ({
    type: ActionTypes.TOPPERS_LOADING
});

export const toppersFailed = (errmess) => ({
    type: ActionTypes.TOPPERS_FAILED,
    payload: errmess
});


export const addToppers = (toppers) => ({
    type: ActionTypes.ADD_TOPPERS,
    payload: toppers
}) 

export const fetchPlacements = () => (dispatch) =>{
    dispatch(placementsLoading(true));

    setTimeout(() => {
        dispatch(addPlacements(PLACEMENTS));
    }, 2000);
}

export const placementsLoading = () => ({
    type: ActionTypes.PLACEMENTS_LOADING
});

export const placementsFailed = (errmess) => ({
    type: ActionTypes.PLACEMENTS_FAILED,
    payload: errmess
});

export const addPlacements = (placements) => ({
    type: ActionTypes.ADD_PLACEMENTS,
    payload: placements
}) 