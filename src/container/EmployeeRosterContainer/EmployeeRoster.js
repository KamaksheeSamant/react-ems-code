
import React, { Component } from "react";
import EmployeeRosterPage from "../../pages/EmployeeRosterPage/EmployeeRosterPage";
import { connect } from 'react-redux';
import { updateFilterOption, updateFilteredEmpList } from './action';
import { empList } from '../../common/const/commonConst';

class EmployeeRosterContainer extends Component {
	constructor() {
		super();
		this.state = {
			searchValue: "",
			toDate: new Date().toJSON().slice(0,10).split("-").reverse().join('/'),
			fromDate: new Date().toJSON().slice(0,10).split("-").reverse().join('/'),
			filterOn: false,
			sortBy: null,
			showEMPModal: false,
			showFilterModal:false,
			currentEmp:{}
		}
	}
	onSetCurrentEmp=(currentEmp)=>{
		this.setState({
			currentEmp:currentEmp
		},()=>{
			this.onShowEMPModal();
		});
	}
	onShowFilterModal=()=>{
		console.log("onShowModal");
		window.scrollTo(0,0);
		this.setState({
			showFilterModal: true
		})
	}
	onShowEMPModal = () => {
		console.log("onShowModal");
		window.scrollTo(0,0);
		this.setState({
			showEMPModal: true
		})
	}
	onCloseEMPModal = () => {
		console.log("onCloseModal");
		this.setState({
			showEMPModal: false
		});
	}
	onCloseFilterModal = () => {
		console.log("onCloseModal");
		this.setState({
			showFilterModal: false
		});
	}
	onClearFilter = (clearFilterBy=true) => {
		this.setState({
			filterOn: false,
			searchValue: "",
			sortBy: null
		}, () => {
			console.log("yeyy clr");
			this.props.dispatch(updateFilteredEmpList([]));
			if(clearFilterBy)
			this.props.dispatch(updateFilterOption("firstName"));
		});
	}
	onFilterToggle = () => {
		this.setState((prevState) => {
			return {
				filterOn: !prevState.filterOn
			};
		});
	}
	// to get the sorted emp list 
	onSortList = (ascending = true, emp_list = empList) => {
		let option = this.props.employeesInfo.selected_filter_option;
		let sortedList=null;
		if (option === "dateJoined") {
			 sortedList = emp_list.sort(function (a, b) {
				a = (a[option].split('T'))[0].split('-');
				b = (b[option].split('T'))[0].split('-');
				let day1 = parseInt(a[2]);
				let day2 = parseInt(b[2]);
				let month1 = parseInt(a[1]);
				let month2 = parseInt(b[1]);
				let year1 = parseInt(a[0]);
				let year2 = parseInt(b[0]);
				if (year1 !== year2) {
					return year1 - year2;
				} else if (month1 !== month2) {
					return month1 - month2;
				} else {
					return day1 - day2;
				}
			});

			if(!ascending){
				sortedList= sortedList.reverse()
			}
		}
		else {
			 sortedList = emp_list.sort(function (a, b) {
				a = a[option];
				b = b[option];
				if (typeof a[option] === "string") {
					a = a[option].toLowerCase();
					b = b[option].toLowerCase();
				}
				if (a < b) //sort string ascending
					return ascending ? -1 : 1
				if (a > b)
					return ascending ? 1 : -1
				return 0
			});
		}
		return sortedList;
	}
	// to get the filtered emp list
	onFilterList = (searchValue, selected_filter_option) => {
		searchValue = searchValue.trim();
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
			this.setState({
				filterOn: false
			});
			if (this.state.sortBy !== null) {
				FilterList = this.onSortList(this.state.sortBy === "ascending" ? true : false, FilterList);
			}
			this.props.dispatch(updateFilteredEmpList(FilterList));
		}
		else if (targetState === "selected_filter_option") {
			FilterList = this.onFilterList(this.state.searchValue, value);
			this.props.dispatch(updateFilterOption(value));
			this.setState({
				filterOn: false
			});
			this.props.dispatch(updateFilteredEmpList(FilterList));
		}
		else if (targetState === "sortBy") {

			if (this.props.employeesInfo.filtered_emp_list && this.props.employeesInfo.filtered_emp_list.length > 0) {
				FilterList = this.onSortList(value === "ascending" ? true : false, this.props.employeesInfo.filtered_emp_list);
			}
			else
				FilterList = this.onSortList(value === "ascending" ? true : false);

			this.setState({
				filterOn: false
			});
			this.props.dispatch(updateFilteredEmpList(FilterList));
		}
		this.setState({
			[targetState]: value
		},()=>{
			console.log("target",targetState,"value",this.state[targetState])
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
			onClearFilter={this.onClearFilter}
			onCloseFilterModal={this.onCloseFilterModal}
			onShowFilterModal={this.onShowFilterModal}
			showFilterModal={this.state.showFilterModal}
			onCloseEMPModal={this.onCloseEMPModal}
			onShowEMPModal={this.onShowEMPModal}
			showEMPModal={this.state.showEMPModal}
			currentEmp={this.state.currentEmp}
			onSetCurrentEmp={this.onSetCurrentEmp} />;
	}
}
const mapStateToProps = state => ({
	employeesInfo: state.employees,
});
export default connect(mapStateToProps)(EmployeeRosterContainer);// linking to redux
