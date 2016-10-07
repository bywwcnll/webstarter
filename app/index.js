/**
 * Created by Gaven on 2016/9/12.
 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Login from './components/Login/Login'
import News from './components/News/News'
import { store } from './store/store'
import $ from 'jquery'
// import {setstate} from './actions/actions';
// console.log(store.getState());
// store.dispatch(setstate('hehe'));
// console.log(store.getState());

const get163 = (store)=>{
    $.get('http://3g.163.com/touch/reconstruct/article/list/BA8D4A3Rwangning/0-10.html', function (data){
        console.log(data)
        console.log(store)
    });
}

render(
    <Provider store={ store }>
        <News />
    </Provider>,
    document.querySelector("#app")
);