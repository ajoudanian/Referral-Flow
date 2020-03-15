import React,{ Component } from 'react';
import { Route,Switch } from 'react-router-dom';

//Components
import Home from '../components/home'
import Login from '../components/login'
import SignIn from '../components/signin'
import Register from '../components/register'

class Routes extends Component {
    render(){
        console.log(this.props);
        return (
            <div>
                <Switch>
                    <Route path='/signin' component={SignIn} />
                    <Route path='/register' component={Register} />
                    <Route path='/login' component={Login} />
                    <Route path='/' component={Home} />
                    
                </Switch>
            </div>
        )
    }
}

export default Routes;