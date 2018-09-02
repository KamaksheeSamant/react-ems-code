
import React, { Component } from "react";
import EmployeeRosterPage from "../../pages/EmployeeRosterPage/EmployeeRosterPage";
import { connect } from 'react-redux';
import { updateFilterOption, updateFilteredEmpList } from './action';

class EmployeeRosterContainer extends Component {
	constructor() {
		super();
		this.state = {
			searchValue: ""
		}
	}

	// to get the filtered emp list
	onFilterList = (searchValue, selected_filter_option) => {
		switch (selected_filter_option) {
			case "age":
				return this.props.employeesInfo.emp_list.filter(item => {
					let valueToCompare = item[selected_filter_option];
					return (valueToCompare.toString() === searchValue)
				});
				break;

			case "dateJoined":
				break;
			default:
				return this.props.employeesInfo.emp_list.filter(item => {
					let valueToCompare = item[selected_filter_option].toLowerCase();
					return (valueToCompare.includes(searchValue.toLowerCase()))
				});
		}
	}
	onStateChange = (targetState, value) => {
		let FilterList;
		if (targetState === "searchValue") {
			FilterList = this.onFilterList(value, this.props.employeesInfo.selected_filter_option);
		}
		else if (targetState === "selected_filter_option") {
			FilterList = this.onFilterList(this.state.searchValue, value);
			this.props.dispatch(updateFilterOption(value));
		}
		this.setState({
			[targetState]: value
		});
		this.props.dispatch(updateFilteredEmpList(FilterList));
	}
	render() {
		return <EmployeeRosterPage
			employeesInfo={this.props.employeesInfo}
			selected_filter_option={this.props.employeesInfo.selected_filter_option}
			onChangeHandler={this.onStateChange}
			searchValue={this.state.searchValue}
			fileteredList={this.props.employeesInfo.filtered_emp_list} />;
	}
}
const mapStateToProps = state => ({
	employeesInfo: state.employees,
});
export default connect(mapStateToProps)(EmployeeRosterContainer);// linking to redux
