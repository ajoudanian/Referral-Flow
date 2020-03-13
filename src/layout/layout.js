import React from 'react'
import Header from './header'

const Layout = (props) => (
    <div>
        <div><Header /></div>
        <div>{props.children}</div>
        <div>footer</div>
    </div>
    
)

export default Layout;