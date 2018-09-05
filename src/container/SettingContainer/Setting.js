
import React, { Component } from "react";
import SettingPage from "../../pages/SettingPage/SettingPage";
import { connect } from 'react-redux';
import { doUpdateSettings } from './action.js';

class SettingContainer extends Component {

	constructor(props) {
		super(props);
		const { 
			companyInfo:{
				companyName = "Company Name", companyMotto = "Company Motto", companyEst = ""
		 	} } = this.props;
		this.state = {
			companyName: companyName,
			companyMotto: companyMotto,
			companyEst: companyEst
		}
	}

	// dispatch company info setting action
	setCompanyInfo = () => {
		this.props.dispatch(doUpdateSettings(this.state));
	}

	// satate lisfting function for state setting
	onStateChange = (targetState, value) => {
		this.setState({
			[targetState]: value
		});
	}

	// to check if the form is clean and to enable submit button 
	isFormClean = () => {
		return (Object.values(this.state).filter(item => item === "").length === 0) ? true : false;
	}
	
	render() {
		return <SettingPage
			companyName={this.state.companyName}
			companyMotto={this.state.companyMotto}
			companyEst={this.state.companyEst}
			onStateChange={this.onStateChange}
			formClean={this.isFormClean()}
			setCompanyInfo={this.setCompanyInfo}
		/>;
	}
}
const mapStateToProps = state => ({
	companyInfo: state.companyInfo.data,
});
export default connect(mapStateToProps)(SettingContainer);// linking to redux
