import React from 'react';
import './Badge.css'
import PropTypes from 'prop-types';


const badge = (props) => {
    return (
        <div className="badge" onClick={props.onClick}>
            <h3>{props.text}</h3>
            <h3>   X</h3>
        </div>
    );
}

badge.propTypes = {
    text: PropTypes.string.isRequired
};

badge.defaultProps = {
    text: "Badge Text"
}
export default badge;