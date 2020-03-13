import React,{ Component } from 'react';
import { Route,Switch } from 'react-router-dom';

//Components
import Home from '../Components/home'
import SignIn from '../Components/signin'

class Routes extends Component {
    render(){
        return (
            <div>
                <Switch>
                    <Route path='/signin' component={SignIn} />
                    <Route path='/' component={Home} />
                </Switch>
            </div>
        )
    }
}

export default Routes;