/**
 * Created by Gaven on 2016/9/18.
 */

import * as types from '../actions/actionTypes'

export const reducer = (state={
    news: {
        pageNum: 0,
        rData: []
    },
    loading: {
        isShow: false
    }
}, action) => {
    switch (action.type) {
        case types.OPEN_LOADING:
            return {...state, loading: {
                isShow: true
            }};
        case types.CLOSE_LOADING:
            return {...state, loading: {
                isShow: false
            }};
        case types.RECEIVED_NEWS:
            return {...state, news: {
                pageNum: state.news.pageNum+1,
                rData: state.news.rData.concat(action.listData)
            }};
        default: return state;
    }
};