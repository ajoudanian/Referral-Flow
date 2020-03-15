import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import { firebase } from './config/firebase'
import './style/style.css';

//COMPONENTS
import Layout from './layout/layout'
import ReducProvider from './structure/redux-provider';



class App extends Component {
    render(){
        return (
            <ReducProvider>
                <BrowserRouter>
                    <Layout />
                </BrowserRouter>
            </ReducProvider>
        )
    }
}

firebase.auth().onAuthStateChanged((user) => {
    ReactDOM.render(<App auth={user} />, document.getElementById('root'));
})






// mport React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';

// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import promiseMiddleware from 'redux-promise';
// import Routes from './routes'

// import reducers from './reducers'
// const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

// ReactDOM.render(
//         <Provider store={createStoreWithMiddleware(reducers)}>
//             <BrowserRouter>
//                 <Routes/>
//             </BrowserRouter>
//         </Provider>
//     , document.getElementById('root'));

