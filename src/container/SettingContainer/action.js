
import * as ActionTypes from '../../common/const/actionTypes';

// action to update the company settings 
export function doUpdateSettings(data) {
    return {
        type: ActionTypes.UPDATE_SETTINGS,
        payload: data
    }
}
