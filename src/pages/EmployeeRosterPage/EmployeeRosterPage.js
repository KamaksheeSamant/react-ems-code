import React from 'react';
import './EmployeeRosterPage.css';
import EmployeeCard from '../../common/components/EmployeeCard/EmployeeCard';
import InputField from '../../common/components/InputField/InputField';
import DropDown from '../../common/components/DropDown/DropDown';
import PropTypes from 'prop-types';
import Badge from '../../common/components/Badge/Badge';


const SearchField = (props) => {
    const { employeesInfo: { filterOptions, emp_list }, onSortList, fileteredList, onChangeHandler, selected_filter_option, searchValue } = props;
    let resultComp = null;
    switch (selected_filter_option) {
        case "dateJoined":
            resultComp = <React.Fragment>
                <InputField
                    onChangeHandler={onChangeHandler}
                    targetState="toDate"
                    placeholder="To Date"
                    type="date"
                    value={searchValue}
                    styleO={{ width: '25%' }} />

                <InputField
                    onChangeHandler={onChangeHandler}
                    targetState="fromDate"
                    placeholder="From Date"
                    type="date"
                    value={searchValue}
                    styleO={{ width: '25%' }} />
            </React.Fragment>
            break;

        default:
            resultComp =
                <React.Fragment>
                    <InputField
                        onChangeHandler={onChangeHandler}
                        targetState="searchValue"
                        placeholder="Search Value"
                        type="text"
                        value={searchValue}
                        styleO={{ width: '60%' }} />
                </React.Fragment>
    }
    return resultComp;
}

const EmployeeRosterPage = (props) => {
    
    const { employeesInfo: { filterOptions, emp_list, sortOptions }, onClearFilter,sortBy, 
    onFilterToggle, filterOn, fileteredList, onChangeHandler, selected_filter_option, 
    searchValue } = props;
    console.log("MMM",emp_list,"ii",fileteredList,"oo",searchValue);
    return (
        <React.Fragment>
        <div className="employeeRoster-container" >
            {(filterOn) ?
                <div className="filter-div">
                    <div className="dropDown">
                        <DropDown
                            placeholder={"SEARCH BY"}
                            onChangeHandler={onChangeHandler}
                            value={selected_filter_option}
                            dataArray={filterOptions}
                            targetState={"selected_filter_option"} />
                    </div>
                    <div className="dropDown">
                        <DropDown
                            placeholder={"SORT BY"}
                            onChangeHandler={onChangeHandler}
                            value={sortBy}
                            dataArray={sortOptions}
                            targetState={"sortBy"} />
                    </div>
                </div> : null}

            <div className="search-div">
                <SearchField {...props} />
                <a onClick={onClearFilter}>Clear</a>
                <button onClick={onFilterToggle} className="filter-button">Apply Filter</button>
            </div>

            <div className="badge-div">
                <Badge text={"SEARCH BY: " + selected_filter_option} />
                {(sortBy !== null) && <Badge onClick={onClearFilter} text={"SORT BY: " + sortBy} />}
            </div>
        </div>
        <div className="employee-container">
        {(fileteredList && fileteredList.length !== 0) ?
            fileteredList.map(item =>
                <EmployeeCard key={item.id} cardDetails={item} />
            ) :
            (searchValue === "") ?
                emp_list.map(item =>
                    <EmployeeCard key={item.id} cardDetails={item} />
                )
                : null
        }
        </div>
        </React.Fragment>
    );
}

EmployeeRosterPage.propTypes = {
    employeesInfo: PropTypes.object,
    fileteredList: PropTypes.arrayOf(PropTypes.object),
    onChangeHandler: PropTypes.func,
    selected_filter_option: PropTypes.string,
    searchValue: PropTypes.string
};

export default EmployeeRosterPage;