/**
 * Created by Gaven on 2016/9/18.
 */

import * as types from '../actions/actionTypes';

export const reducer = (state='dft', action) => {
    switch (action.type) {
        case types.SET_STATE: return state=action.payload;
        default: return state;
    }
}