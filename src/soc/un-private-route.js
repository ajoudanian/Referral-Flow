import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const UnPrivateRoute = ({ 
        auth,
        component:Comp,
        ...rest
    }) => {
    return <Route {...rest} component={(props) => (
        !auth ? 
        <Comp {...props} />
        :
        <Redirect to="/" />
    )} />
}

export default UnPrivateRoute;