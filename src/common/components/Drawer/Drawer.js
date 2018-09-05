import React from 'react';
import './Drawer.css';
import { navOptions } from '../../const/commonConst';
import PropTypes from 'prop-types';
import UserIcon from '../../../assets/icon/user.png';


const drawer = (props) => {
    const { isDrawerOpen = false } = props;
    return (
        <React.Fragment>

            <nav className={(isDrawerOpen) ? "drawer open" : " drawer"}>
                <div className="drawer-container" >
                    <div className="drawer-header">
                        <img src={UserIcon}  alt="User Icon"/>
                        <div className="user-info">
                            <h2>User Name</h2>
                            <h3>User@Email.ID</h3>
                        </div>
                    </div>
                </div>
                <ul>
                    {
                        navOptions.map((item) => {
                            return (
                                <li key={item}><a href={"/" + item}> {item.replace("_", " ")} </a></li>
                            );
                        })
                    }
                </ul>
            </nav>
        </React.Fragment>
    );
}

drawer.propTypes = {
    isDrawerOpen: PropTypes.bool.isRequired
};

drawer.defaultProps = {
    isDrawerOpen: false
}
export default drawer;