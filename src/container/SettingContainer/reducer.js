
import * as ActionTypes from "../../common/const/actionTypes";

const initialState = {
    data: {},
    isLoading: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        
        case ActionTypes.UPDATE_SETTINGS: {
            //console.log("i am inside reducer",action.payload);
            return {
                ...state,
                data: action.payload,
                isLoading: false
            }
        }
        default: return state;
    }
}        
