import React from 'react';
import './EmployeeCard.css';
import PropTypes from 'prop-types';

const employeeCard = (props) => {
    const { cardDetails: {
        avatar,
        firstName = "First Name",
        lastName = "Last Name",
        jobTitle = "Job Title" } } = props;

    return (
        <React.Fragment>
            {/* card is for desktop view */}
            <div className="card">
                <img src={avatar} alt="Employee Avatar" />
                <h1>{firstName + " " + lastName}</h1>
                <p className="title">{jobTitle}</p>
                <p><button onClick={props.onSetCurrentEmp.bind(this,props.cardDetails)}>Learn More</button></p>
            </div>
            {/* list id for mobile view */}
            <div className="list">
                <li onClick={props.onSetCurrentEmp.bind(this,props.cardDetails)}>
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

