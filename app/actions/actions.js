/**
 * Created by Gaven on 2016/9/18.
 */
import * as types from './actionTypes'
import 'whatwg-fetch'
// import fetchJsonp from 'fetch-jsonp'

const getUrl = (pageNum)=>{
    return 'http://3g.163.com/touch/reconstruct/article/list/BA8D4A3Rwangning/'+(pageNum*10+1)+'-10.html';
};

export const openLoading = ()=>{
    return {
        type: types.OPEN_LOADING
    }
};
export const closeLoading = ()=>{
    return {
        type: types.CLOSE_LOADING
    }
};

export const receivedNews = (listData)=>{
    return {
        type: types.RECEIVED_NEWS,
        listData: listData
    }
};

const fetchNewsUtil = (url, dispatch, getState)=>{
    dispatch(openLoading());
    return fetch(url).then(response => {
        return response.text()
    }).then(jsonTxt => {
        return JSON.parse(jsonTxt.substring(9, jsonTxt.length-1));
    })
};

export const getNews = ()=>{
    return (dispatch, getState) => {
        // return fetchJsonp(getUrl(getState().news.pageNum),{
        //     timeout: 1000,
        //     jsonpCallbackFunction: 'artiList'
        // }).then(response => {
        //     return response.json();
        // }).then(json => {
        //     dispatch(receivedNews(json.BA8D4A3Rwangning));
        // }).catch((e)=>{
        //     console.log(e.message);
        // });
        fetchNewsUtil(getUrl(getState().news.pageNum), dispatch, getState).then(json => {
            dispatch(receivedNews(json.BA8D4A3Rwangning));
        }).then(()=>{
            setTimeout(()=>{
                dispatch(closeLoading());
            }, 1000);
        }).catch((e)=>{
            console.log(e.message);
        });;
    };
};

