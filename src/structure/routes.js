import React,{ Component } from 'react';
import { Route,Switch } from 'react-router-dom';

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
        console.log(this.props);
        return (
            <div>
                <Switch>
                    <Route path='/about' component={About} />
                    <Route path='/register' component={Register} />
                    <UnPrivateRoute path='/login' component={Login} />
                    <UnPrivateRoute path='/logout' component={Logout} />
                    <PrivateRoute auth={this.props.auth} path='/' component={Home} />
                    
                </Switch>
            </div>
        )
    }
}

export default Routes;