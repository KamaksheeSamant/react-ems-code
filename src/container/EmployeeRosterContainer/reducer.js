
import * as ActionTypes from "../../common/const/actionTypes";

const initialState = {
    emp_list: [],
    filtered_emp_list:[],
    isLoading: false,
    filter_option: "firstName"
}

export default function (state = initialState, action) {
    switch (action.type) {
        
        case ActionTypes.SET_FILTER_OPTION: {
            return {
                ...state,
                filter_option: action.payload
            }
        }
        case ActionTypes.SET_FILTER_LIST: {
            return {
                ...state,
                filter_option: action.payload
            }
        }
        default: return state;
    }
}        
