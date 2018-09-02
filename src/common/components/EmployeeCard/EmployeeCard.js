import React from 'react';
import './EmployeeCard.css';
import PropTypes from 'prop-types';

const employeeCard = (props) => {
    const { cardDetails: {
        avatar,
        firstName = "First Name",
        lastName = "Last Name",
        jobTitle = "Job Title",
        age, bio = "Employee Bio data",
        dateJoined } } = props;
        
    return (
        <div className="card">
            <img src={avatar} alt="Employee Avatar" style={{ width: '100%' }} />
            <h1>{firstName + " " + lastName}</h1>
            <p className="title">{jobTitle}</p>
            <p><button>Contact</button></p>
        </div>
    );
}

employeeCard.propTypes = {
    cardDetails: PropTypes.object.isRequired
};

employeeCard.defaultProps = {
    cardDetails: {}
}

export default employeeCard;

