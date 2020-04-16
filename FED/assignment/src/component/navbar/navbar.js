import React from 'react';

import menuIcon from './../../asset/menu.png';
import profilePhoto from './../../asset/avatar_one.jpg'
import './navbar.css';

function Navbar(props) {
    return (
        <div className="navbar">
            <img className="navbar-icon-img" src={menuIcon} alt={menuIcon} />
            <div className="navbar-profile-container">
                <img src={profilePhoto} alt={profilePhoto} />
                <font>&#9660;</font>
            </div>
        </div>
    );
}

export default Navbar;