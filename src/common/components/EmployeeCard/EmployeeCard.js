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
        <React.Fragment>
            <div className="card">
                <img src={avatar} alt="Employee Avatar" />
                <h1>{firstName + " " + lastName}</h1>
                <p className="title">{jobTitle}</p>
                <p><button>VIEW</button></p>
            </div>
            <div className="list">
                <li>
                    <img src={avatar} alt="Employee Avatar" />
                    <h3>{firstName + " " + lastName}</h3>
                    <p className="title">{jobTitle}</p>
                </li>
            </div>
        </React.Fragment>
    );
}

employeeCard.propTypes = {
    cardDetails: PropTypes.object.isRequired
};

employeeCard.defaultProps = {
    cardDetails: {}
}

export default employeeCard;

