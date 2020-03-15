import React from 'react'
import { firebase } from '../config/firebase'
import { Redirect } from 'react-router-dom';

const Logout = (() => {
    const user = firebase.auth().currentUser;
    if (user) {firebase.auth().signOut() }
    return <Redirect to='/login' /> 
})

export default Logout;