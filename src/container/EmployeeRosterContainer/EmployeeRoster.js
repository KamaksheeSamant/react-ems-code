
import React, { Component } from "react";
import EmployeeRosterPage from "../../pages/EmployeeRosterPage/EmployeeRosterPage";
import { connect } from 'react-redux';
import { updateFilterOption, updateFilteredEmpList } from './action';

class EmployeeRosterContainer extends Component {
	constructor() {
		super();
		this.state = {
			searchValue: "",
			toDate:null,
			fromDate:null,
			filterOn:false,
			sortBy:null
		}
	}
	
	onClearFilter=()=>{
		this.setState({
			filterOn:false,
			searchValue:"",
			sortBy:null
		},()=>{
			console.log("yeyy clr");
			this.props.dispatch(updateFilteredEmpList([]));
		});
	}
	onFilterToggle=()=>{
		this.setState((prevState) => {
			return {
				filterOn: !prevState.filterOn
			};
		  });
	}
	// to get the sorted emp list 
	onSortList =(ascending = true)=>{
		let emp_list = this.props.employeesInfo.emp_list;
		let option = this.props.employeesInfo.selected_filter_option;

		this.setState({
			sortBy:(ascending)?"ascending":"descending"
		});
		//let sortedList = emp_list.map(item=>item[option].toLowerCase()).sort()
		let sortedList = emp_list.sort(function(a, b){
			a=a[option];
			b=b[option];
			if(typeof a[option] === "string")
			{	
				a=a[option].toLowerCase();
				b=b[option].toLowerCase();
			}
			if (a < b) //sort string ascending
				return ascending?-1:1 
			if (a > b)
				return ascending?1:-1
			return 0
		});
		console.log("sorted",sortedList)
		//this.props.dispatch(updateFilteredEmpList(sortedList));
		return sortedList;
	}
	// to get the filtered emp list
	onFilterList = (searchValue, selected_filter_option) => {
		searchValue= searchValue.trim();
		let emp_list = this.props.employeesInfo.emp_list;
		switch (selected_filter_option) {
			case "age":
				return emp_list.filter(item => {
					let valueToCompare = item[selected_filter_option];
					return (valueToCompare.toString() === searchValue)
				});
				break;

			case "dateJoined":
				break;

			default:
				return emp_list.filter(item => {
					let valueToCompare = item[selected_filter_option].toLowerCase();
					return (valueToCompare.includes(searchValue.toLowerCase()))
				});
		}
	}
	onStateChange = (targetState, value) => {
		let FilterList;
		if (targetState === "searchValue") {
			FilterList = this.onFilterList(value, this.props.employeesInfo.selected_filter_option);
			this.props.dispatch(updateFilteredEmpList(FilterList));
		}
		else if (targetState === "selected_filter_option") {
			FilterList = this.onFilterList(this.state.searchValue, value);
			this.props.dispatch(updateFilterOption(value));
			this.setState({
				filterOn:false
			});
			this.props.dispatch(updateFilteredEmpList(FilterList));
		}
		else if(targetState === "sortBy"){
			console.log(targetState,value);
			FilterList = this.onSortList(value === "ascending"?true:false);
			this.setState({
				filterOn:false
			});
			this.props.dispatch(updateFilteredEmpList(FilterList));
		}
		this.setState({
			[targetState]: value
		},()=>{
			console.log("t",targetState,this.state[targetState]);
		});
		
	}
	render() {
		return <EmployeeRosterPage
			employeesInfo={this.props.employeesInfo}
			selected_filter_option={this.props.employeesInfo.selected_filter_option}
			onChangeHandler={this.onStateChange}
			searchValue={this.state.searchValue}
			fileteredList={this.props.employeesInfo.filtered_emp_list} 
			onSortList={this.onSortList}
			filterOn={this.state.filterOn}
			onFilterToggle={this.onFilterToggle}
			sortBy={this.state.sortBy}
			onClearFilter={this.onClearFilter}/>;
	}
}
const mapStateToProps = state => ({
	employeesInfo: state.employees,
});
export default connect(mapStateToProps)(EmployeeRosterContainer);// linking to redux
