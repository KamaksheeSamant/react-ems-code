import React from 'react';
import './SettingPage.css';
import InputField from '../../common/components/InputField/InputField';
import PropTypes from 'prop-types';

const SettingPage = (props) => {
    const { companyName = "", companyMotto = "", companyEst = "",
        onStateChange, formClean = false, setCompanyInfo } = props;
    return (
        <div className="setting-container">
            <h1 className="setting-title">Company Information Setting</h1>
            <form>
                <InputField
                    styleO={{ width: '100%' }}
                    placeholder="Company Name"
                    type="text"
                    value={companyName}
                    onChangeHandler={onStateChange}
                    isRequired={true}
                    targetState="companyName" />

                <InputField
                    styleO={{ width: '100%' }}
                    placeholder="Company Motto"
                    type="text"
                    value={companyMotto}
                    onChangeHandler={onStateChange}
                    isRequired={true}
                    targetState="companyMotto" />

                <InputField
                    styleO={{ width: '100%' }}
                    placeholder="Company Establishment Date"
                    type="text"
                    value={companyEst}
                    onChangeHandler={onStateChange}
                    isRequired={true}
                    targetState="companyEst" />

                <button disabled={!formClean} type="button" 
                onClick={setCompanyInfo}>Submit Info</button>
            </form>
        </div>
    );
}

SettingPage.propTypes = {
    companyName: PropTypes.string,
    companyMotto: PropTypes.string,
    companyEst: PropTypes.string,
    onStateChange: PropTypes.func,
    formClean: PropTypes.bool,
    setCompanyInfo: PropTypes.func
};

SettingPage.defaultProps = {
    companyName: "Comapny Name",
    companyMotto: "Company Motto",
    formClean: false
}
export default SettingPage;