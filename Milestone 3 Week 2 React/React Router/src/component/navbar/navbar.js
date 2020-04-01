import React from 'react';
import './navbar.css'

const Navbar = ({ search, updateSearch }) => {
    return (
        <div className="navigation-bar">
            <h3 className="brand-name">Black Spade</h3>
            <div className="navigation-links">
                <a className="active" href="http://localhost:3000/sellers">Sellers</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="http://localhost:3000/about">About</a>
                
            </div>
            <button className="navbar-logout-button" >Logout</button>
            <input type="text" placeholder="Search" value={search} onChange={updateSearch} ></input>
            
        </div>
    );
}

export default Navbar;