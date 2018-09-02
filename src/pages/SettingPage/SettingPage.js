import React from 'react';
import './SettingPage.css';
import InputField from '../../common/components/InputField/InputField';

const SettingPage = (props) => {
    return (
        <div className="setting-container">
            <h1 className="setting-title">Company Information Setting</h1>
            <form>
                <InputField
                    placeholder="Company Name"
                    type="text"
                    value={props.companyName}
                    onChangeHandler={props.onStateChange}
                    isRequired={true}
                    targetState="companyName" />

                <InputField
                    placeholder="Company Motto"
                    type="text"
                    value={props.companyMotto}
                    onChangeHandler={props.onStateChange}
                    isRequired={true}
                    targetState="companyMotto" />

                <InputField
                    placeholder="Company Establishment Date"
                    type="text"
                    value={props.companyEst}
                    onChangeHandler={props.onStateChange}
                    isRequired={true}
                    targetState="companyEst" />

                <button disabled={!props.formClean} type="button" onClick={props.setCompanyInfo}>Submit Info</button>
            </form>
        </div>
    );
}
export default SettingPage;