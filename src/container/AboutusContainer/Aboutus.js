
import React, { Component } from "react";
import AboutusPage from "../../pages/AboutusPage/AboutusPage";
import { connect } from 'react-redux';

 class AboutusContainer extends Component {
	render() {
		return <AboutusPage
		companyInfo={this.props.companyInfo}/>;
	}
}
const mapStateToProps = state => ({
	companyInfo: state.companyInfo.data,
});
export default connect(mapStateToProps)(AboutusContainer);// linking to redux
