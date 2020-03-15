import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ 
        auth,
        component:Comp,
        ...rest
    }) => {
    return <Route {...rest} component={(props) => (
        auth ? 
        <Comp {...props} />
        :
        <Redirect to="/login" />
    )} />
}

export default PrivateRoute;