import React,{ Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { Spinner } from 'react-bootstrap'
import { firebase } from '../config/firebase';

import InviteForm from './invite'
import Pendings from './pendings'
import Accepted from './accepted'

class Home extends Component{

    state = { loading: true }

    componentDidMount(){
        if(firebase.auth().currentUser)
        {
            this.props.getCurrentUser();
            this.props.loadReferrals(firebase.auth().currentUser.uid).then(()=> {
                this.setState({ loading: false });
            });
        }
    }

    render(){
        
        return this.state.loading ? 
        <div className="preloader"><Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner></div>
         : 
         <div>
        <InviteForm {...this.props} />
        <br />
        <Pendings {...this.props} />
        <br />
        <Accepted {...this.props} />

        </div>
            
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