import React from 'react';

import homeIcon from './../../asset/home.png'
import stackIcon from './../../asset/stack.png'
import './sidebar.css'

function Sidebar(props) {
    return (
        <div className="sidebar">
            <div className="sidebar-dashboard">
                <div>Dashboard</div>
                <img src={homeIcon} alt={homeIcon} />
            </div>
            <div className="sidebar-catalog">
                <div>Product Catalog</div>
                <img src={stackIcon} alt={stackIcon} />
            </div>
        </div>
    );
}

export default Sidebar;