import React from "react";
import "./Toolbar.css";
import HamburgerButton from "../Drawer/HamburgerButton";
import logo from "../../../assets/images/westpacLogo.png";
import PropTypes from "prop-types";
import { navOptions } from "../../const/commonConst";
import { connect } from "react-redux";

const toolbar = (props) => {
  return (
    <header className="toolbar">
      <nav className="toolbar_nav">
        <div className="hamburgerButton">
          <HamburgerButton drawerToggler={props.drawerToggler} />
        </div>
        <div className="toolbar_logo">
          <img src={logo} alt="Company Logo" />
          <div className="tootlbar_title">
            <a href="/">{props.companyInfo.companyName}</a>
            <h3>{props.companyInfo.companyMotto}</h3>
          </div>
        </div>
        <div className="seperator"> </div>
        <div className="toolbar_options">
          <ul>
            {navOptions.map((item) => {
              return (
                <li key={item}>
                  <a href={"/" + item}> {item.replace("_", " ")} </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

toolbar.propTypes = {
  drawerToggler: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  companyInfo: state.companyInfo.data,
});
export default connect(mapStateToProps)(toolbar); // linking to redux
