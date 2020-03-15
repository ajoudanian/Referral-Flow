import React,{ Component } from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import { firebase } from '../config/firebase'

const PrivateNavLink = ({children,...rest}) => {
    const user = firebase.auth().currentUser;
    return user ? <Nav.Link {...rest}>{children}</Nav.Link> : ''
}

const UnPrivateNavLink = ({children,...rest}) => {
    const user = firebase.auth().currentUser;
    return !user ? <Nav.Link {...rest}>{children}</Nav.Link> : ''
}

class Header extends Component{
    state = {
        user: null
    }


    render(){
        firebase.auth().onAuthStateChanged((user) => {
            if (user !== this.state.user) { this.setState({user}) }
        });
        
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
    
                <Navbar.Brand href="/">
                <img
                    src="images/logo.svg"
                    width="30"
                    height="30"
                    style={{marginRight:'10px'}}
                    className="d-inline-block align-top" 
                    alt="Referral Flow"
                />Referral Flow
                </Navbar.Brand>
    
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <PrivateNavLink href="/">Home</PrivateNavLink>
                    <Nav.Link href="/about">About</Nav.Link>
                    <UnPrivateNavLink href="/login">Login</UnPrivateNavLink>
                    <UnPrivateNavLink href="/register">Register</UnPrivateNavLink>
                    <PrivateNavLink href="/logout">Sign out</PrivateNavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> 
            
        );
    }
    
}

export default Header;