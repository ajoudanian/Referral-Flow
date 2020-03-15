import React from 'react'
import { firebase } from '../config/firebase'
import { Redirect } from 'react-router-dom';

const Logout = ((props) => {
    const user = firebase.auth().currentUser;
    if (user) {firebase.auth().signOut().then(()=>{
        props.history.push('/login');
    }) }
    return <Redirect to='/login' /> 
})

export default Logout;