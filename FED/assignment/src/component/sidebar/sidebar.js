import React from 'react';

import homeIcon from './../../asset/home.png'
import stackIcon from './../../asset/stack.png'
import './sidebar.css'

function Sidebar(props) {
    return (
        <div className="sidebar">
        <div className="sidebar-dashboard">
            <button>Dashboard</button>
            <img src={homeIcon} alt={homeIcon} />
        </div>
        <div className="sidebar-catalog">
            <button>Product Catalog</button>
            <img src={stackIcon} alt={stackIcon} />
        </div>
        </div>
    );
}

export default Sidebar;