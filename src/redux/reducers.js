// import postsData from '../data/posts';
import {combineReducers} from 'redux';


function users(state = [], action) {
    switch (action.type){
        case 'GET-USERS-ALL': { return action.payload }
        default: return state;
    }
} 

function referral(state = [] , action){
    switch (action.type){
        case 'ADD-FERERRAL': { return [...state,action.payload] }
        case 'GET-REFERRAL-ALL': { return action.payload }
        default: return state;
    }
}






function currentUser(state = {} , action){
    switch (action.type){
        case 'GET-CURRENT-USER': { return action.payload }
        default: return state;
    }
}

const rootReducer = combineReducers({users,referral,currentUser});

export default rootReducer;
