import { ActionTypes } from "../constants/actionTypes";

export const setTimeReducer = (state = '', {type, payload}) =>{
    switch(type) {
        case ActionTypes.SET_TIME:
            return payload;
        default: 
            return state;
    }
}