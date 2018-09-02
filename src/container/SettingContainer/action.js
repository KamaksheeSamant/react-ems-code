
import * as ActionTypes from '../../common/const/actionTypes';

export function doUpdateSettings(data) {
    
    return {
        type: ActionTypes.UPDATE_SETTINGS,
        payload: data
    }
}
