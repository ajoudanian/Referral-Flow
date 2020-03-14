import React from 'react'
import { Provider } from 'react-redux'
import { createStore , applyMiddleware, compose} from 'redux'
import rootReducer from '../redux/reducers'
import thunk from 'redux-thunk';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));


const ReducProvider = (props) => (
    <Provider store={store}>{props.children}</Provider>
    )

export default ReducProvider;