import React from 'react'
import Header from './header'
import {Container} from 'react-bootstrap'
import Routes from '../structure/routes';



const Layout = (props) => {
    
    return (
    <div>
        <Header />
        <Container>
            <Routes {...props} />
        </Container>
    </div>
    )
}

export default Layout;