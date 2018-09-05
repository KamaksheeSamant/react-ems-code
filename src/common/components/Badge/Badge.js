import React from 'react';
import './Badge.css'
import PropTypes from 'prop-types';


const badge = (props) => {
    const {text, isCross=true, label="", selected=true}= props;
    return (
        <div className={(selected)?"badge selected":"badge"} onClick={props.onClick} >
            <h3><span className="label">{(label !== "")?label+": ":""}</span><span>{text}</span></h3>
            {(isCross && <h3>X</h3>)}
        </div>
    );
}

badge.propTypes = {
    text: PropTypes.string.isRequired,
    isCross: PropTypes.bool,
    label: PropTypes.string
};

badge.defaultProps = {
    text: "Badge Text"
}
export default badge;