
import * as ActionTypes from '../../common/const/actionTypes';

export function updateFilterOption(data) {
    
    return {
        type: ActionTypes.SET_FILTER_OPTION,
        payload: data
    }
}

export function updateFilteredEmpList(data) {
    
    return {
        type: ActionTypes.SET_FILTER_LIST,
        payload: data
    }
}
