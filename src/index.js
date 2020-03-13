import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom'


//COMPONENTS
import Routes from './structure/routes'
import Layout from './layout/layout'



class App extends Component {
    render(){
        return <BrowserRouter><Layout><Routes /></Layout></BrowserRouter>
    }
}


ReactDOM.render(<App />, document.getElementById('root'));