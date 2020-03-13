import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const navigationBar = ()=>{
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Referral Flow</Navbar.Brand>
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