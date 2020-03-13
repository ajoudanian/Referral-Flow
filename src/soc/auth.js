import React,{Component} from 'react';

class Auth extends Component{

    render()
    {
        console.log('Auth');
        return <div>{this.props.children}</div>
    }
    
}

export default Auth;