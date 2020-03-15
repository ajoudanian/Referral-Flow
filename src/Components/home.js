import React,{ Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { Spinner } from 'react-bootstrap'
import { firebase } from '../config/firebase';

import Users from './users'
import InviteForm from './invite'
import Pendings from './pendings'

class Home extends Component{

    state = { loading: true }

    componentDidMount(){
        this.props.getCurrentUser();
            
        this.props.loadReferrals(firebase.auth().currentUser.uid).then(()=> {
            this.setState({ loading: false });
        });
        
    }

    render(){
        console.log(this.props);
        return this.state.loading ? 
        <div className="preloader"><Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner></div>
         : 
         <div><h1>Home</h1>
        <InviteForm {...this.props} />
        <br />
        <Pendings {...this.props} />

        <Users {...this.props} /></div>
            
    }   
}

function mapStateToProps(state){
    return {
        users:state.users,
        referral:state.referral,
        currentUser:state.currentUser
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actions,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)