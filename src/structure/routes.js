import React,{ Component } from 'react';
import { Route,Switch } from 'react-router-dom';

//Components
import Home from '../components/home'
import Login from '../components/login'
import SignIn from '../components/signin'

class Routes extends Component {
    render(){
        return (
            <div>
                <Switch>
                    <Route path='/signin' component={SignIn} />
                    <Route path='/login' component={Login} />
                    <Route path='/' component={Home} />
                    
                </Switch>
            </div>
        )
    }
}

export default Routes;