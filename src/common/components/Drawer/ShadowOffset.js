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


export default shadowOffset;