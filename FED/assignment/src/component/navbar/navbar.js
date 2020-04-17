import React from 'react';

import menuIcon from './../../asset/menu.png';
import profilePhoto from './../../asset/avatar_one.jpg'
import './navbar.css';

function Navbar(props) {

    const openSidebar = () => {
        document.getElementsByClassName("sidebar")[0].style.width = "80%";
        document.getElementsByClassName("sidebar-font1")[0].style.fontSize = "20px";
        document.getElementsByClassName("sidebar-font2")[0].style.fontSize = "20px";
    }

    return (
        <div className="navbar">
            <img onClick={openSidebar} className="navbar-icon-img" src={menuIcon} alt={menuIcon} />
            <div className="navbar-profile-container">
                <img src={profilePhoto} alt={profilePhoto} />
                <font>&#9660;</font>
            </div>
        </div>
    );
}

export default Navbar;