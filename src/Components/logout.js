
import React from 'react'
import { firebase } from '../config/firebase'


const Logout = ((props) => {
    firebase.auth().signOut().then(()=>{
        // 
        // setTimeout(function(){ props.history.push('/login') }, 1000);

    })
    return <div>You are loged out</div>
})

export default Logout;