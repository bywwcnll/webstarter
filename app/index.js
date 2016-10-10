/**
 * Created by Gaven on 2016/9/12.
 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import News from './components/News/News'
import { store } from './store/store'
// import {setstate} from './actions/actions';
// console.log(store.getState());
// store.dispatch(setstate('hehe'));
// console.log(store.getState());

render(
    <Provider store={ store }>
        <News />
    </Provider>,
    document.querySelector("#app")
);