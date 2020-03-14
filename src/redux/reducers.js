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


// function posts(state = postsData, action) {
//     switch (action.type){
//         case 'REMOVE-PHOTO': return [...state.slice(0,action.index),...state.slice(action.index + 1 )]
//         case 'ADD-PHOTO': return [...state,action.post]
//         case 'LOAD-POSTS': return action.posts
//         default: return state;
//     }
// } 

const rootReducer = combineReducers({});

export default rootReducer;