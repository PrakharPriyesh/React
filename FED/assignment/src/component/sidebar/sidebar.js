import React from 'react';

import homeIcon from './../../asset/home.png';
import stackIcon from './../../asset/stack.png';
import rpLogo from './../../asset/rp-logo.png';
import './sidebar.css';

function Sidebar(props) {
    return (
        <div className="sidebar">
            <div className="sidebar-logo-container">
                <img src={rpLogo} alt={rpLogo} />
            </div>
            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <font className="sidebar-font1">Dashboard</font>
                    <img src={homeIcon} alt={homeIcon} />
                </li>
                <li className="sidebar-list-item">
                    <font className="sidebar-font2">Product Catalog</font>
                    <img src={stackIcon} alt={stackIcon} />
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;