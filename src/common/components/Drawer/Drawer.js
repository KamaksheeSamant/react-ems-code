import React from 'react';
import './Drawer.css';
import { navOptions } from '../../const/commonConst';

const drawer = (props) => {
    return (
        <nav className={(props.isDrawerOpen) ? "drawer open" : " drawer"}>
            <ul>
                {
                    navOptions.map((item) => {
                        return (
                            <li key={item}><a href="/"> {item} </a></li>
                        );
                    })
                }
            </ul>
        </nav>
    );
}
export default drawer;