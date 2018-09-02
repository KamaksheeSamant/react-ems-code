import React from 'react';
import './DropDown.css';
import PropTypes from 'prop-types';

const dropDown = (props) => {
    const { onChangeHandler, targetState, value = "", dataArray } = props;
    //console.log(dataArray);
    return (
        <select value={value} onChange={(e)=>{
            onChangeHandler(targetState, e.target.value);
        }}>
            {(dataArray.map(item=>{
                return <option key={item.value} value={item.value}>{item.label}</option>
            }))}
        </select>
    );
}

// employeeCard.propTypes = {
// };

// employeeCard.defaultProps = {
// }

export default dropDown;// linking to redux

