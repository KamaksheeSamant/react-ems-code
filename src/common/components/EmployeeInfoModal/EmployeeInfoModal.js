import React from 'react';
import './EmployeeInfoModal.css'
import PropTypes from 'prop-types';

const employeeInfoModal = (props) => {
    const {empInfo:{  avatar,
        firstName = "First Name",
        lastName = "Last Name",
        jobTitle = "Job Title",
        age, bio = "Employee Bio data",
        dateJoined}}=props;
    return (
        <div className="emp-detail" >
        <div className="left-info">
            <img src={avatar}  alt="Employee Avatar" />
            <h3>{"Age: "+age}</h3>
        </div>
        <div className="right-info">
                <h1>{firstName+" "+lastName}</h1>
                <hr/>
                <h2>{"Job:"+jobTitle}</h2>
                <h2>{'" '+bio+' "'}</h2>
                <h2>{"Joined on: "+dateJoined.split('T')[0]}</h2>
        </div>
    </div>
    );
}

employeeInfoModal.propTypes = {
    text: PropTypes.string.isRequired,
    isCross: PropTypes.bool,
    label: PropTypes.string
};

employeeInfoModal.defaultProps = {
    text: "Badge Text"
}
export default employeeInfoModal;