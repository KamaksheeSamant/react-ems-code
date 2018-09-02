import React from 'react';
import './AboutusPage.css';

const AboutusPage = (props) => {
    const {companyName, companyMotto}=props.companyInfo;
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
export default AboutusPage;