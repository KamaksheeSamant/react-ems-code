
import { combineReducers } from "redux";
import companyInfo from '../container/SettingContainer/reducer';
import employees from '../container/EmployeeRosterContainer/reducer';

export default combineReducers({
	companyInfo,
	employees
});