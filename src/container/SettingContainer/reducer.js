
import * as ActionTypes from "../../common/const/actionTypes";

const initialState = {
    data: {},
    isLoading: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        //to update the company settings 
        case ActionTypes.UPDATE_SETTINGS: {
            return {
                ...state,
                data: action.payload,
                isLoading: false
            }
        }
        default: return state;
    }
}        
