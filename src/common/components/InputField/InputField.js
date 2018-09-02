import React from 'react';
import './inputField.css'
import PropTypes from 'prop-types';

const inputField = (props) => {
    const { placeholder, type, onChangeHandler, targetState, value = "", isRequired=false } = props;
    return (
        <React.Fragment>
            <h2 >{placeholder + ": "}</h2>
            <input className={(isRequired && value === "") ? "inputField required" : "inputField"}
                type={type}
                placeholder={placeholder}
                onChange={(e) => onChangeHandler(targetState, e.target.value)}
                value={value} />
            <p>{(isRequired && value === "") ? "This is a required field" : null}</p>
        </React.Fragment>
    );
}

inputField.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string,
    onChangeHandler: PropTypes.func.isRequired
};

inputField.defaultProps = {
    placeholder: "",
    type: "text"
}
export default inputField;