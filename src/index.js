import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import { firebase } from './config/firebase'
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
                        <Routes {...this.props} />
                    </Layout>
                </ReducProvider>
            </BrowserRouter>
        )
    }
}

firebase.auth().onAuthStateChanged((user) => {
    ReactDOM.render(<App auth={user} />, document.getElementById('root'));
})



