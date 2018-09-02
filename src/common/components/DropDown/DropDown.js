import React from 'react';
import './DropDown.css';
import PropTypes from 'prop-types';

const dropDown = (props) => {
    const { onChangeHandler, targetState, value = "", dataArray } = props;

    return (
        <select value={value} onChange={(e) => {
            onChangeHandler(targetState, e.target.value);
        }}>

            {(dataArray.map(item => {
                return <option key={item.value} value={item.value}>{item.label}</option>
            }))}
        </select>
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

