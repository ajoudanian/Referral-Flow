import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'


const navigationBar = ()=>{
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
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/signin">Sign In</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar> 
        
    )
}  

const Header = () => {
    return navigationBar();
}

export default Header;