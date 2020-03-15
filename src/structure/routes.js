import React,{ Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import { firebase } from '../config/firebase'

//Components
import Home from '../components/home'
import About from '../components/about'
import Login from '../components/login'
import Logout from '../components/logout'
import Register from '../components/register'
import PrivateRoute from '../soc/private-route'
import UnPrivateRoute from '../soc/un-private-route'

class Routes extends Component {
    render(){
        const auth = firebase.auth().currentUser;
        return (
            <div>
                <Switch>
                    <Route path='/about' component={About} />
                    <UnPrivateRoute auth={auth} path='/register/:ref' component={Register} />
                    <UnPrivateRoute auth={auth} path='/register' component={Register} />
                    <UnPrivateRoute auth={auth} path='/login' component={Login} />
                    <PrivateRoute auth={auth} path='/logout' component={Logout} />
                    <PrivateRoute auth={auth} path='/' component={Home}/>
                    
                </Switch>
            </div>
        )
    }
}

export default Routes;