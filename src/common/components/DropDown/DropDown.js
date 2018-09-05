import React from 'react';
import './DropDown.css';
import PropTypes from 'prop-types';


const dropDown = (props) => {
    const { onChangeHandler, targetState, value = "", dataArray, placeholder } = props;

    return (
        <div className="dropDown-container">
        <h3>{placeholder}</h3>
        <select value={value} onChange={(e) => {
            onChangeHandler(targetState, e.target.value);
        }}>

            {(dataArray.map(item => {
                if(item.disabled)
                {
                    // to give default value
                    return <option key={item.value} value={item.value}
                    disabled hidden selected>
                    {item.label}</option>
                }
                else
                {
                    return <option key={item.value} value={item.value}>{item.label}</option>
                }
                
            }))}
        </select>
        </div>
    );
}

dropDown.propTypes = {
    onChangeHandler:PropTypes.func.isRequired,
    targetState:PropTypes.string.isRequired,
    value:PropTypes.string,
    dataArray:PropTypes.arrayOf(PropTypes.object).isRequired
};

dropDown.defaultProps = {
    value:""
}

export default dropDown;

