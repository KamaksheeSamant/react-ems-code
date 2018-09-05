import React from 'react';
import './EmployeeRosterPage.css';
import EmployeeCard from '../../common/components/EmployeeCard/EmployeeCard';
import InputField from '../../common/components/InputField/InputField';
import DropDown from '../../common/components/DropDown/DropDown';
import PropTypes from 'prop-types';
import Badge from '../../common/components/Badge/Badge';
import Modal from '../../common/components/Modal/Modal';
import EmployeeInfoModal from '../../common/components/EmployeeInfoModal/EmployeeInfoModal';
import { empList } from '../../common/const/commonConst';

// to get all the years containing in emp list for date of joining
const getYears = () => {
    let set = new Set(empList.map(item => item.dateJoined.split("T")[0].split("-")[0]));
    let array = [...set];
    array = array.map(item => ({
        "value": item,
        "label": item
    }));
    array.unshift({ "label": "Select Year", "value": "SelectYear", "disabled": true });
    return array;
}
// to switch the search field according to filter option
const SearchField = (props) => {
    const { employeesInfo: { filterOptions, emp_list }, toDate, fromDate, onSortList, fileteredList, onChangeHandler, selected_filter_option, searchValue } = props;
    let resultComp = null;
    switch (selected_filter_option) {
        case "dateJoined":
            resultComp = <React.Fragment>
                <DropDown
                    placeholder={"SEARCH BY"}
                    onChangeHandler={onChangeHandler}
                    dataArray={getYears()}
                    targetState={"searchValue"}
                    value={searchValue} />
                {/* <InputField
                    onChangeHandler={onChangeHandler}
                    targetState="toDate"
                    placeholder="To Date"
                    type="date"
                    value={toDate}
                    styleO={{ width: '25%' }} />

                <InputField
                    onChangeHandler={onChangeHandler}
                    targetState="fromDate"
                    placeholder="From Date"
                    type="date"
                    value={fromDate}
                    styleO={{ width: '25%' }} /> */}
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

    const { employeesInfo: { filterOptions, emp_list, sortOptions }, onClearFilter, sortBy,
        onFilterToggle, filterOn, fileteredList, onChangeHandler, selected_filter_option,
        searchValue, onCloseEMPModal, onShowEMPModal, showEMPModal } = props;
    return (
        <React.Fragment>
            <div className="employeeRoster-container" >
                {(filterOn) ?
                    <div id="filter-div">
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
                    <button className="filter-button" onClick={onFilterToggle} className="filter-button">Apply Filter</button>
                </div>

                <div className="badge-div">
                    <div className="apply-filter">
                        <Badge onClick={props.onShowFilterModal} isCross={false} text={"Apply Filter"} />
                    </div>
                    <Badge isCross={false} label="SEARCH BY" text={selected_filter_option} />
                    {(sortBy !== null) && <Badge onClick={onClearFilter.bind(this, false)} label="SORT BY" text={sortBy} />}
                </div>
                {(props.showEMPModal) &&
                    <Modal onClose={props.onCloseEMPModal}>
                        <EmployeeInfoModal empInfo={props.currentEmp} />
                    </Modal>}

                {(props.showFilterModal) &&
                    <Modal onClose={props.onCloseFilterModal}>
                        <div className="filter-container" style={{ display: 'flex', flexDirection: 'column' }}>
                            <a onClick={onClearFilter} style={{ fontFamily: 'sans-serif', fontSize: '0.9rem', color: '#676262', position: 'absolute', right: '0', marginRight: '20px' }}>Clear</a>
                            <div>
                                <h2 style={{ fontFamily: 'sans-serif', fontSize: '0.9rem', color: '#676262' }}>SEARCH BY: </h2>
                                {filterOptions.map(item =>
                                    <Badge onClick={onChangeHandler.bind(this, "selected_filter_option", item.value)} selected={(item.value === selected_filter_option) ? true : false} isCross={false} text={item.label} />
                                )}
                            </div>
                            <div>
                                <h2 style={{ fontFamily: 'sans-serif', fontSize: '0.9rem', color: '#676262' }}>SORT BY: </h2>
                                {sortOptions.map(item => {
                                    if (item.value !== "sortby")
                                        return <Badge onClick={onChangeHandler.bind(this, "sortBy", item.value)} selected={(item.value === sortBy) ? true : false} isCross={false} text={item.label} />
                                })}
                            </div>
                        </div>
                    </Modal>}

            </div>
            <div className="employee-container">
                {/* to show filtered list (or the original emp list when the search field is empty) */}
                {(fileteredList && fileteredList.length !== 0) ?
                    fileteredList.map(item =>
                        <EmployeeCard key={item.id} cardDetails={item}
                            onSetCurrentEmp={props.onSetCurrentEmp} />
                    ) :
                    (searchValue === "") ?
                        emp_list.map(item =>
                            <EmployeeCard key={item.id} cardDetails={item}
                                onSetCurrentEmp={props.onSetCurrentEmp} />
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