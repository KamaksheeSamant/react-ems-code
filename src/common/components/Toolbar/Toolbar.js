import React from 'react';
import './Toolbar.css';
import HamburgerButton from '../Drawer/HamburgerButton';
import logo from "../../../assets/images/westpacLogo.png";
import PropTypes from 'prop-types';
import {navOptions} from '../../const/commonConst';

const toolbar =(props)=>{
    return(
    <header className="toolbar">
        <nav className="toolbar_nav">
            <div className="hamburgerButton">
                <HamburgerButton drawerToggler={props.drawerToggler}/>
            </div>
            <div className="toolbar_logo">
                <img src={logo} alt="Westpac Logo"/>
                <a href="/">Westpac EMS</a>
            </div>
            <div className="seperator"> </div>
            <div className="toolbar_options">
                <ul>
                    {
                        navOptions.map((item)=>{
                            return(
                                <li key={item}><a href="/"> {item} </a></li>
                            );
                        })
                    }
                </ul>
            </div>
        </nav>
    </header>
    );
}

toolbar.propTypes = {
    drawerToggler: PropTypes.func.isRequired
};

toolbar.defaultProps={
    drawerToggler:()=>{
        console.log("drawerToggler function is not passed");
    }
}
export default toolbar;