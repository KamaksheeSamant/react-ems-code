
import React, { Component } from "react";
import EmployeeRosterPage from "../../pages/EmployeeRosterPage/EmployeeRosterPage";
import { connect } from 'react-redux';

class EmployeeRosterContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected_filter_option: this.props.employeesInfo.selected_filter_option,
			searchValue: "",
			fileteredList: this.props.employeesInfo.emp_list
		}
	}

	onFilterList=(searchValue,selected_filter_option)=>{
		console.log("searchValue",searchValue,"selected_filter_op",selected_filter_option);
		if(selected_filter_option === "age"){
			return this.props.employeesInfo.emp_list.filter(item=>
				{
					let valueToCompare = item[selected_filter_option];
					 return (valueToCompare.toString() === searchValue)
				}
			);
		}
		else
		if(selected_filter_option === "dateJoined")
		{

		}
		else
		{
			return this.props.employeesInfo.emp_list.filter(item=>
			{
				let valueToCompare = item[selected_filter_option];
			 	return (valueToCompare.includes(searchValue.toLowerCase()))
			});
		}
	}
	onStateChange = (targetState, value) => {
		//console.log("target",targetState,value);
		if (targetState === "searchValue") {
			let FilterList= this.onFilterList(value,this.state.selected_filter_option);
			//console.log("IIII",FileList);
			this.setState({
				[targetState]: value,
				fileteredList:(FilterList !== undefined)?FilterList:[]
			});
		}
		else {
			let FilterList= this.onFilterList(this.state.searchValue,value);
			this.setState({
				[targetState]: value,
				fileteredList:(FilterList !== undefined)?FilterList:[]
			});
		}
	}
	render() {
		return <EmployeeRosterPage
			employeesInfo={this.props.employeesInfo}
			selected_filter_option={this.state.selected_filter_option}
			onChangeHandler={this.onStateChange}
			searchValue={this.state.searchValue}
			fileteredList={this.state.fileteredList} />;
	}
}
const mapStateToProps = state => ({
	employeesInfo: state.employees,
});
export default connect(mapStateToProps)(EmployeeRosterContainer);// linking to redux
