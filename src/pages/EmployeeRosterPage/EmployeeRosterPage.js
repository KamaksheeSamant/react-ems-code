import React from 'react';
import './EmployeeRosterPage.css';
import EmployeeCard from '../../common/components/EmployeeCard/EmployeeCard';
import InputField from '../../common/components/InputField/InputField';
import DropDown from '../../common/components/DropDown/DropDown';
import PropTypes from 'prop-types';

const EmployeeRosterPage = (props) => {
    const { employeesInfo: { filterOptions, emp_list }, fileteredList, onChangeHandler, selected_filter_option, searchValue } = props;
    return (
        <div className="employeeRoster-container" >
            <InputField
                onChangeHandler={onChangeHandler}
                targetState="searchValue"
                placeholder="Search Value"
                type="text"
                value={searchValue} />

            <DropDown
                onChangeHandler={onChangeHandler}
                value={selected_filter_option}
                dataArray={filterOptions}
                targetState={"selected_filter_option"} />

            <div className="employee-container">
                {(fileteredList.length !== 0) ? 
                    fileteredList.map(item => {
                        return <EmployeeCard key={item.id} cardDetails={item} />
                    }):
                    emp_list.map(item => {
                        return <EmployeeCard key={item.id} cardDetails={item} />
                })}
            </div>
        </div>
    );
}

EmployeeRosterPage.propTypes = {
    employeesInfo: PropTypes.object, 
    fileteredList:PropTypes.arrayOf(PropTypes.object), 
    onChangeHandler:PropTypes.func, 
    selected_filter_option:PropTypes.string, 
    searchValue:PropTypes.string
};

export default EmployeeRosterPage;