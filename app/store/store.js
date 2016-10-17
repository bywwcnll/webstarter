
import { createStore, applyMiddleware, compose } from 'redux'
import { reducer } from './reducer'
import thunkMiddleware from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer, composeEnhancers(
    applyMiddleware(
        thunkMiddleware, // 允许我们 dispatch() 函数
    )
));

