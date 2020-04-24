import React from 'react';

import menuIcon from './../../asset/menu.png';
import profilePhoto from './../../asset/avatar_one.jpg'
import './navbar.css';

const Navbar = (props) => {
    const openSidebar = () => {
        document.getElementsByClassName("sidebar")[0].style.display = "block";
        document.getElementsByClassName("sidebar")[0].style.minWidth = "260px";
        document.getElementById("sidebar-img1").style.height = "26px";
        document.getElementById("sidebar-img2").style.height = "26px";
        document.getElementById("sidebar-font1").style.fontSize = "20px";
        document.getElementById("sidebar-font2").style.fontSize = "20px";
        const url = window.location.href;

        if (url === "http://localhost:3000/dashboard") {
            document.getElementById('sidebar-list-dashboard').style.borderLeft = "10px solid dodgerblue"
            document.getElementById('sidebar-list-catalog').style.borderLeft = "0px solid dodgerblue"

        }

        if (url === "http://localhost:3000/catalog") {
            document.getElementById('sidebar-list-dashboard').style.borderLeft = "0px solid dodgerblue"
            document.getElementById('sidebar-list-catalog').style.borderLeft = "10px solid dodgerblue"
        }
    }

    const logOutHandler = (e) => {
        localStorage.removeItem("username");
        localStorage.removeItem("userpass");
    }

    return (
        <div className="navbar">
            <img onClick={openSidebar} className="navbar-icon-img" src={menuIcon} alt={menuIcon} />
            <div className="navbar-profile-container">
                <img src={profilePhoto} alt={profilePhoto} />
                <font>&#9660;</font>
                <div className="navbar-profile-container-dropdown-content">
                    <button onClick={logOutHandler}>Log Out</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;