import { firebase , firebaseDBUsers , firebaseDBReferral } from "../config/firebase";


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

export function addReferral(referaal){

    const request = firebaseDBReferral.push(referaal).then( () => {
            return referaal;
            })
    return {
        type: 'ADD-FERERRAL',
        payload:request
    }
}


export function getCurrentUser(){

    const auth = firebase.auth().currentUser;
    return {
        type: 'GET-CURRENT-USER',
        payload:auth
    }
}


export function loadReferrals(uid){

    const request = firebaseDBReferral.orderByChild("inviter").equalTo(uid).once('value').then( (snapshot) => {
                let users = [];
                snapshot.forEach((childsnapshot) => {
                    users.push(childsnapshot.val());
                })
                return users;
            })
    return {
        type: 'GET-REFERRAL-ALL',
        payload:request
    }
}