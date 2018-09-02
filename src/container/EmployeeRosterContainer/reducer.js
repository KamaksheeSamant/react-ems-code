
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
                selected_filter_option: action.payload
            }
        }
        case ActionTypes.SET_FILTER_LIST: {
            return {
                ...state,
                filtered_emp_list: action.payload
            }
        }
        default: return state;
    }
}        
