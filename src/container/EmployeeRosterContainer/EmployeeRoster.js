
import React, { Component } from "react";
import EmployeeRosterPage from "../../pages/EmployeeRosterPage/EmployeeRosterPage";
import { connect } from 'react-redux';

 class EmployeeRosterContainer extends Component {
	render() {
		return <EmployeeRosterPage
		companyInfo={this.props.companyInfo}/>;
	}
}
const mapStateToProps = state => ({
	companyInfo: state.companyInfo.data,
});
export default connect(mapStateToProps)(EmployeeRosterContainer);// linking to redux
