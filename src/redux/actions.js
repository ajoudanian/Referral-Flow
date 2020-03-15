import { firebaseDBUsers } from "../config/firebase";


// export const startLoadingUsers = () => ((dispatch) => {
//     firebaseDBUsers.once('value').then( (snapshot) => {
//         let users = [];
//         snapshot.forEach((childsnapshot) => {
//             users.push(childsnapshot.val());
//         })
//         dispatch(loadUsers(users));
//     }).catch((error) => console.log(error));
// }
// );



export function loadUsers(){

    const request = firebaseDBUsers.once('value').then( (snapshot) => {
                let users = [];
                snapshot.forEach((childsnapshot) => {
                    users.push(childsnapshot.val());
                })
                return users;
            })
    return {
        type: 'GET-USERS-ALL',
        payload:request
    }
}