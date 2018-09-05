import React from 'react';
import './inputField.css'
import PropTypes from 'prop-types';

const inputField = (props) => {
    const { placeholder,styleO, type ,onChangeHandler, targetState, value = "", isRequired=false } = props;
    return (
        <React.Fragment>
            {/* styleO is to apply customised style */}
             <input style={styleO} 
            className={(isRequired && value === "") ? "inputField required" : "inputField"} 
                type={type}
                placeholder={placeholder}
                onChange={(e) => onChangeHandler(targetState, e.target.value)}
                value={value} />
                {/* to tell that the fiel is required */}
            {(isRequired && value === "") ? <p className="req-msg">This is a required field</p> : null}
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