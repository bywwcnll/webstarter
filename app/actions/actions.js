/**
 * Created by Gaven on 2016/9/18.
 */
import * as types from './actionTypes'
import fetchJsonp from 'fetch-jsonp'

const getUrl = (pageNum)=>{
    return 'http://3g.163.com/touch/reconstruct/article/list/BA8D4A3Rwangning/'+(pageNum*10+1)+'-10.html';
};

export const getNews = (listData)=>{
    return {
        type: types.GET_NEWS,
        listData: listData
    }
};

export const fetchfun = ()=>{
    return (dispatch, getState) => {
        return fetchJsonp(getUrl(getState().news.pageNum),{
            jsonpCallbackFunction: 'artiList'
        }).then(response => {
            return response.json();
        }).then(json => {
            dispatch(getNews(json.BA8D4A3Rwangning));
        });
    };
};

