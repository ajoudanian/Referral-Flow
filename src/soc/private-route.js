import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ 
        auth,
        component:Comp,
        ...rest
    }) => {
    console.log('this',auth);
    return <Route {...rest} component={(props) => (
        auth ? 
        <Comp {...props} />
        :
        <Redirect to="/login" />
    )} />
}

export default PrivateRoute;