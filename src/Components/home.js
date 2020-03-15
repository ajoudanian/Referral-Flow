import React,{ Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

import Users from './users'
import InviteForm from './invite'

class Home extends Component{

    state = { loading: true }

    componentDidMount(){
        this.props.loadUsers().then(()=>
            this.setState = { loading: false }
        );
    }

    render(){
        
        return <div>
        Home
        <InviteForm />
        <Users {...this.props} />
        </div>    
    }   
}

function mapStateToProps(state){
    return {
        users:state.users
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actions,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)