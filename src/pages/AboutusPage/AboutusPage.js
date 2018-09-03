import React from 'react';
import './AboutusPage.css';
import PropTypes from 'prop-types';


const AboutusPage = (props) => {
    const { companyInfo: { companyName="Company Name", companyMotto="Company Motto" } } = props;
    return (
        <div className="aboutus-container" >
            <h1 className="title">{companyName}</h1>
            <h2 className="sub-title">{companyMotto}</h2>
            <p>Some text that describes me lorem ipsum ipsum lorem.Some text that describes me lorem ipsum ipsum lorem.Some text that describes me lorem ipsum ipsum lorem.Some text that describes me lorem ipsum ipsum lorem.Some text that describes me lorem ipsum ipsum lorem.Some text that describes me lorem ipsum ipsum lorem.Some text that describes me lorem ipsum ipsum lorem.Some text that describes me lorem ipsum ipsum lorem.Some text that describes me lorem ipsum ipsum lorem.
            Some text that describes me lorem ipsum ipsum lorem.Some text that describes me lorem ipsum ipsum lorem.Some text that describes me lorem ipsum ipsum lorem.Some text that describes me lorem ipsum ipsum lorem.Some text that describes me lorem ipsum ipsum lorem.Some text that describes me lorem ipsum ipsum lorem.Some text that describes me lorem ipsum ipsum lorem.Some text that describes me lorem ipsum ipsum lorem.
            Some text that describes me lorem ipsum ipsum lorem.Some text that describes me lorem ipsum ipsum lorem.Some text that describes me lorem ipsum ipsum lorem.Some text that describes me lorem ipsum ipsum lorem.Some text that describes me lorem ipsum ipsum lorem.Some text that describes me lorem ipsum ipsum lorem.Some text that describes me lorem ipsum ipsum lorem.
            Some text that describes me lorem ipsum ipsum lorem.Some text that describes me lorem ipsum ipsum lorem.Some text that describes me lorem ipsum ipsum lorem.Some text that describes me lorem ipsum ipsum lorem.Some text that describes me lorem ipsum ipsum lorem.Some text that describes me lorem ipsum ipsum lorem.Some text that describes me lorem ipsum ipsum lorem.
            </p>
        </div>
    );
}

AboutusPage.propTypes = {
    companyInfo: PropTypes.object.isRequired
};

AboutusPage.defaultProps = {
    companyInfo: {}
}

export default AboutusPage;