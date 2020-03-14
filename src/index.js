import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import './config/db';
import './style/style.css';

//COMPONENTS
import ReducProvider from './structure/redux-provider';
import Routes from './structure/routes';
import Layout from './layout/layout';



class App extends Component {
    render(){
        return (
            <BrowserRouter>
                <ReducProvider>
                    <Layout>
                        <Routes />
                    </Layout>
                </ReducProvider>
            </BrowserRouter>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));