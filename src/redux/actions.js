import { firebase , firebaseDBUsers , firebaseDBReferral } from "../config/firebase";





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
    let user = { email:auth.email , uid:auth.uid}
    const request = firebaseDBUsers.orderByChild("uid").equalTo(auth.uid).once('value').then( (snapshot) => {        
        snapshot.forEach((childsnapshot) => {
            const val = childsnapshot.val();
            
            user.displayName = val.displayname;
        })
        return user;
    })

    return {
        type: 'GET-CURRENT-USER',
        payload:request
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