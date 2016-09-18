/**
 * Created by Gaven on 2016/9/18.
 */
import * as types from './actionTypes';

export const setstate = (val) => {
    console.log(types);
    return {
        type: types.SET_STATE,
        payload: val
    }
};