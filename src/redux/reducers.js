// import postsData from '../data/posts';
import {combineReducers} from 'redux';


function users(state = [], action) {
    switch (action.type){
        case 'GET-USERS-ALL': { return action.payload }
        default: return state;
    }
} 


const rootReducer = combineReducers({users});

export default rootReducer;
