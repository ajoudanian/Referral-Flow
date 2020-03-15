import React from 'react'
import { Provider } from 'react-redux'
import { createStore , applyMiddleware} from 'redux'
import rootReducer from '../redux/reducers'
import promiseMiddleware from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)


const ReducProvider = (props) => (
    <Provider store={createStoreWithMiddleware(rootReducer)}>{props.children}</Provider>
    )

export default ReducProvider;






