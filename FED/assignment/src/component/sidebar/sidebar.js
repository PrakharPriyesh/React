import React from 'react';
import { Link } from 'react-router-dom';

import homeIcon from './../../asset/home.png';
import stackIcon from './../../asset/stack.png';
import rpLogo from './../../asset/rp-logo.png';
import './sidebar.css';

const Sidebar = (props) => {

    const url = window.location.href;
    let dashboardClass = "sidebar-list-item-active";
    let catalogClass = "sidebar-list-item"

    if (url === "http://localhost:3000/dashboard") {
        dashboardClass = "sidebar-list-item-active";
        catalogClass = "sidebar-list-item"
    }

    if (url === "http://localhost:3000/catalog") {
        dashboardClass = "sidebar-list-item";
        catalogClass = "sidebar-list-item-active"
    }

    return (
        <div className="sidebar">
            <div className="sidebar-logo-container">
                <img src={rpLogo} alt={rpLogo} />
            </div>
            <ul className="sidebar-list">
                <Link to="/dashboard">
                    <li id="sidebar-list-dashboard" className={dashboardClass}>
                        <font id="sidebar-font1">Dashboard</font>
                        <img id="sidebar-img1" src={homeIcon} alt={homeIcon} />
                    </li>
                </Link>
                <Link to="/catalog">
                    <li id="sidebar-list-catalog" className={catalogClass}>
                        <font id="sidebar-font2">Product Catalog</font>
                        <img id="sidebar-img2" src={stackIcon} alt={stackIcon} />
                    </li>
                </Link>
            </ul>
        </div>
    );
}

export default Sidebar;