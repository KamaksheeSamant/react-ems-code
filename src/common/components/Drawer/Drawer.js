import React from 'react';
import './Drawer.css';
import { navOptions } from '../../const/commonConst';
import PropTypes from 'prop-types';

const drawer = (props) => {
    const {isDrawerOpen = false} = props;
    return (
        <nav className={(isDrawerOpen) ? "drawer open" : " drawer"}>
            <ul>
                {
                    navOptions.map((item) => {
                        return (
                            <li key={item}><a href={"/"+item}> {item.replace("_"," ")} </a></li>
                        );
                    })
                }
            </ul>
        </nav>
    );
}

drawer.propTypes = {
    isDrawerOpen: PropTypes.bool.isRequired
};

drawer.defaultProps={
    isDrawerOpen: false
}
export default drawer;