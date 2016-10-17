/**
 * Created by Gaven on 2016/9/18.
 */

import * as types from '../actions/actionTypes'

export const reducer = (state={
    news: {
        pageNum: 0,
        rData: []
    }
}, action) => {
    switch (action.type) {
        case types.SET_STATE:
            return state=action.payload;
        case types.GET_NEWS:
            return {...state, news: {
                pageNum: state.news.pageNum+1,
                rData: state.news.rData.concat(action.listData)
            }};
        default: return state;
    }
};