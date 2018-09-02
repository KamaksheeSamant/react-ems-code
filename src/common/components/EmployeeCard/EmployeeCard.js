import React from 'react';
import './EmployeeCard.css';
import PropTypes from 'prop-types';

const employeeCard = (props) => {
    const {avatar,firstName,lastName,jobTitle,age,bio,dateJoined}=props.cardDetails;
    return (
        <div className="card">
            <img src={avatar} alt="Employee Avatar" style={{width:'100%'}} />
            <h1>{firstName+" "+lastName}</h1>
            <p className="title">{jobTitle}</p>
            <p><button>Contact</button></p>
        </div>
    );
}

// employeeCard.propTypes = {
// };

// employeeCard.defaultProps = {
// }

export default employeeCard;// linking to redux

