import React from 'react'
import Header from './header'
import {Container} from 'react-bootstrap'

const Layout = (props) => (
    <div>
    
        <Header />
        <Container>
        <div>{props.children}</div>
        </Container>
    </div>   
)

export default Layout;