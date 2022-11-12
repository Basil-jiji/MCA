import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../shared/baseUrl';

export const addAnnouncement = (announcement) =>({
    type: ActionTypes.ADD_ANNOUNCEMENT,
    payload: announcement

});

export const addAnnouncements = (announcements) =>({
    type: ActionTypes.ADD_ANNOUNCEMENTS,
    payload: announcements

});

export const postAnnouncement = (title, message) => (dispatch) =>{
    const newAnnouncement = {
        title: title,
        message: message
    }
    newAnnouncement.date = new Date().toISOString();

    return fetch (baseUrl + 'announcements',
    {
        method: 'POST',
        body: JSON.stringify(newAnnouncement),
        headers: {
            'Content-type' : 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if(response.ok){
            return response;
        }
        else{
            var error = new Error('Error' + response.status + ': ' + response.statusText );
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess; 
    }
    )
    .then(response => response.json())
    .then(response => dispatch(addAnnouncement(response)))
    .catch(error => {console.log('Post Announcements', error.message);
        alert('Your Announcement could not be posted\nError:' + error.message); })
}

export const fetchAnnouncements = () => (dispatch) =>{
    dispatch(announcementLoading(true));

    return fetch(baseUrl + 'announcements')
    .then(response => {
        //When an error comes of the server
        if(response.ok){
            return response;
        }
        else{
            var error = new Error('Error' + response.status + ': ' + response.statusText );
            error.response = response;
            throw error;
        }
    },

    //When nothing come out of the server
    error => {
        var errmess = new Error(error.message);
        throw errmess; 
    }
    )
    .then(response => response.json())
    .then(announcements => dispatch(addAnnouncement(announcements)))
    .catch(error => dispatch(announcementFailed(error.message)));
}

export const announcementLoading = () => ({
    type: ActionTypes.ANNOUNCEMENT_LOADING
});

export const announcementFailed = (errmess) => ({
    type: ActionTypes.ANNOUNCEMENT_FAILED,
    payload: errmess
});

export const addPost = (post) =>({
    type: ActionTypes.ADD_POST,
    payload: post

});

export const postPost = (content) => (dispatch) =>{
    const newPost = {
        content: content
    }
    newPost.date = new Date().toISOString();

    return fetch (baseUrl + 'posts',
    {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            'Content-type' : 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if(response.ok){
            return response;
        }
        else{
            var error = new Error('Error' + response.status + ': ' + response.statusText );
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess; 
    }
    )
    .then(response => response.json())
    .then(response => dispatch(addPost(response)))
    .catch(error => {console.log('Post Posts', error.message);
        alert('Your Post could not be posted\nError:' + error.message); })
}

export const fetchPosts = () => (dispatch) =>{
    dispatch(postsLoading(true));

    return fetch(baseUrl + 'posts')
    .then(response => {
        //When an error comes of the server
        if(response.ok){
            return response;
        }
        else{
            var error = new Error('Error' + response.status + ': ' + response.statusText );
            error.response = response;
            throw error;
        }
    },

    //When nothing come out of the server
    error => {
        var errmess = new Error(error.message);
        throw errmess; 
    }
    )
    .then(response => response.json())
    .then(posts => dispatch(addPosts(posts)))
    .catch(error => dispatch(postsFailed(error.message)));
}


export const postsLoading = () => ({
    type: ActionTypes.POSTS_LOADING
});

export const postsFailed = (errmess) => ({
    type: ActionTypes.POSTS_FAILED,
    payload: errmess
});

export const addPosts = (posts) => ({
    type: ActionTypes.ADD_POSTS,
    payload: posts
})

export const fetchToppers = () => (dispatch) =>{
    dispatch(toppersLoading(true));

    return fetch(baseUrl + 'toppers')
    .then(response => {
        //When an error comes of the server
        if(response.ok){
            return response;
        }
        else{
            var error = new Error('Error' + response.status + ': ' + response.statusText );
            error.response = response;
            throw error;
        }
    },

    //When nothing come out of the server
    error => {
        var errmess = new Error(error.message);
        throw errmess; 
    }
    )
    .then(response => response.json())
    .then(toppers => dispatch(addToppers(toppers)))
    .catch(error => dispatch(toppersFailed(error.message)));
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

    return fetch(baseUrl + 'placements')
    .then(response => {
        //When an error comes of the server
        if(response.ok){
            return response;
        }
        else{
            var error = new Error('Error' + response.status + ': ' + response.statusText );
            error.response = response;
            throw error;
        }
    },

    //When nothing come out of the server
    error => {
        var errmess = new Error(error.message);
        throw errmess; 
    }
    )
    .then(response => response.json())
    .then(placements => dispatch(addPlacements(placements)))
    .catch(error => dispatch(placementsFailed(error.message)));
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

export const postFeedback = (firstname, lastname, telnum, email, agree, contactType, message) => (dispatch) =>{
    const newFeedback = {
        firstname: firstname,
        lastname: lastname,
        telnum: telnum,
        email: email,
        agree: agree,
        contactType: contactType,
        message: message
    }
    newFeedback.date = new Date().toISOString();

    return fetch(baseUrl + 'feedback',{
        method: 'POST',
        body: JSON.stringify(newFeedback),
        headers:{
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {

        if (response.ok) {
            
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText)
            error.response = response;
            throw error;
        }
    },
        ////if no responmse from server 
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        }
    )
    .then(response => response.json())
    .then(response => alert(JSON.stringify(response)))
    .catch(error => {
        console.log('Post Feedback', error.message);
        alert('Feedback could not be posted\nError' + error.message);
    });

}

export const fetchFeedback = () => (dispatch) =>{
    dispatch(feedbackLoading(true));

    return fetch(baseUrl + 'feedback')
    .then(response => {
        //When an error comes of the server
        if(response.ok){
            return response;
        }
        else{
            var error = new Error('Error' + response.status + ': ' + response.statusText );
            error.response = response;
            throw error;
        }
    },

    //When nothing come out of the server
    error => {
        var errmess = new Error(error.message);
        throw errmess; 
    }
    )
    .then(response => response.json())
    .then(feedbacks => dispatch(addFeedbacks(feedbacks)))
    .catch(error => dispatch(feedbackFailed(error.message)));
}

export const feedbackLoading = () => ({
    type: ActionTypes.FEEDBACK_LOADING
});

export const feedbackFailed = (errmess) => ({
    type: ActionTypes.FEEDBACK_FAILED,
    payload: errmess
});

export const addFeedbacks = (feedbacks) => ({
    type: ActionTypes.ADD_FEEDBACKS,
    payload: feedbacks
}) 

export const postPrayaana = (firstname, lastname, course, registernumber, batch, collegeName, coding, quiz, gaming, treasure, email, phoneNumber) => (dispatch) => {
    const newPrayaana = {
        firstname: firstname,
        lastname: lastname,
        course: course,
        registernumber: registernumber,
        batch: batch,
        collegeName: collegeName,
        coding: coding,
        quiz: quiz,
        gaming: gaming,
        treasure: treasure,
        email: email,
        phoneNumber: phoneNumber
    }
    newPrayaana.date = new Date().toISOString();

    return fetch(baseUrl + 'prayaana',{
        method: 'POST',
        body: JSON.stringify(newPrayaana),
        headers:{
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText)
            error.response = response;
            throw error;
        }
    },
        ////if no responmse from server 
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        }
    )
    .then(response => response.json())
    .then(response => alert(JSON.stringify(response)))
    .catch(error => {
        console.log('Prayaana Registration', error.message);
        alert('Prayaana Registration Failed\nError' + error.message);
    });
}



export const fetchPrayaana = () => (dispatch) =>{
    dispatch(prayaanaLoading(true));

    return fetch(baseUrl + 'prayaana')
    .then(response => {
        //When an error comes of the server
        if(response.ok){
            return response;
        }
        else{
            var error = new Error('Error' + response.status + ': ' + response.statusText );
            error.response = response;
            throw error;
        }
    },

    //When nothing come out of the server
    error => {
        var errmess = new Error(error.message);
        throw errmess; 
    }
    )
    .then(response => response.json())
    .then(prayaanas => dispatch(addPrayaanas(prayaanas)))
    .catch(error => dispatch(prayaanaFailed(error.message)));
}

export const prayaanaLoading = () => ({
    type: ActionTypes.PRAYAANA_LOADING
});

export const prayaanaFailed = (errmess) => ({
    type: ActionTypes.PRAYAANA_FAILED,
    payload: errmess
});

export const addPrayaanas = (prayaanas) => ({
    type: ActionTypes.ADD_PRAYAANAS,
    payload: prayaanas
}) 