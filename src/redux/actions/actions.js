import {ActionTypes} from '../constants/actionTypes.js';

export const setTime = (timeFrame) => {
    return {
        type: ActionTypes.SET_TIME,
        payload: timeFrame
    }
}