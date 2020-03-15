import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const UnPrivateRoute = ({ 
        auth,
        ...rest
    }) => {
        console.log('auth',auth);
        console.log(rest);

        if (!auth){ 
            return <Route {...rest} />
        }
        else{
            return <Redirect to="/" />
        }
    }


export default UnPrivateRoute;