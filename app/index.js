/**
 * Created by Gaven on 2016/9/12.
 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import News from './components/News/News'
import NewsDetail from './components/News/NewsDetail'
import Login from './components/Login/Login'
import { store } from './store/store'

render(
    <Provider store={ store }>
        <Router history={ browserHistory }>
            <Route path="/" component={ News }/>
            <Route path="/login" component={ Login }/>
            <Route path="/detail" component={ NewsDetail }/>
        </Router>
    </Provider>,
    document.querySelector("#app")
);