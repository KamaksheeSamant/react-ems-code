import React from 'react';
import './HamburgerButton.css';
import hamburgerIcon from '../../../assets/icon/hamburger.png';
import PropTypes from 'prop-types';

const hamburgerButton =(props)=>{
    return(
        <button className="hamburger-button"  onClick={props.drawerToggler}>
            <img src={hamburgerIcon} alt="Side Drawer Icon"/>
        </button>
    );
}
hamburgerButton.propTypes = {
    drawerToggler: PropTypes.func.isRequired
};

hamburgerButton.defaultProps={
    drawerToggler:()=>{
        console.log("drawerToggler function is not passed");
    }
}
export default hamburgerButton;