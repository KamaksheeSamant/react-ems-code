import React from 'react';
import './ShadowOffset.css';
import PropTypes from 'prop-types';

const shadowOffset =(props)=>{
    const {closeDrawer} = props;
    return (
        <div className="shadowOffset" onClick={closeDrawer} />
    );
}

shadowOffset.propTypes = {
    closeDrawer: PropTypes.func.isRequired
};

shadowOffset.defaultProps={
    closeDrawer:()=>{
        console.log("Close Drawer function is not passed");
    }
}
export default shadowOffset;