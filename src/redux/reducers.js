// import postsData from '../data/posts';
import {combineReducers} from 'redux';


// function comments( state = {} , action ) {
//     switch (action.type){
//         case 'LOAD-COMMENTS': { return action.comments }
//         case 'ADD-COMMENT': {
//             if(!state[action.postId]){
//                 return {...state,[action.postId]:[action.comment]}
//             }
//             else{
//                 return {...state,[action.postId]:[...state[action.postId],action.comment]}
//             }
            
//         }
//         default: return state
//     }
// }


function posts(state = {}, action) {
    switch (action.type){
        case 'REMOVE-PHOTO': return []
        case 'ADD-PHOTO': return []
        case 'LOAD-POSTS': return []
        default: return state;
    }
} 

const rootReducer = combineReducers({posts});

export default rootReducer;