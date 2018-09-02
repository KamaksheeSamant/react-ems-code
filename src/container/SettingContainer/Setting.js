
import React, { Component } from "react";
import SettingPage from "../../pages/SettingPage/SettingPage";
import { connect } from 'react-redux';
import {doUpdateSettings} from  './action.js';

 class SettingContainer extends Component {
	
	constructor(props){
		super(props);
		const { companyName="",companyMotto="",companyEst=""}=this.props.companyInfo
		this.state={
			companyName: companyName,
    		companyMotto: companyMotto,
    		companyEst: companyEst
		}
	}
	setCompanyInfo=()=>{
		this.props.dispatch(doUpdateSettings(this.state));
	}
	onStateChange=(targetState,value)=>{
		this.setState({
			[targetState]:value
		});
	}
	isFormClean=()=>{
		//console.log("okok",Object.values(this.state).filter(item=> item === "").length);
		return (Object.values(this.state).filter(item=> item === "").length === 0)?true:false;
	}
	render() {
		console.log("state of redux",this.props.companyInfo.companyName);
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
