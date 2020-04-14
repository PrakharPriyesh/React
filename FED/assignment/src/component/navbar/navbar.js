import React from 'react';

import rpLogo from './../../asset/rp-logo.png';
import profilePhoto from './../../asset/avatar_one.jpg'
import './navbar.css';

function Navbar(props) {
    return (
        <div className="navbar">
            <div className="navbar-logo-container">
                <img src={rpLogo} alt={rpLogo}/>
            </div>
            <div className="navbar-profile-container">
                <img src={profilePhoto} alt={profilePhoto} />
               <font>&#9660;</font>
            </div>
        </div>
    );
}

export default Navbar;