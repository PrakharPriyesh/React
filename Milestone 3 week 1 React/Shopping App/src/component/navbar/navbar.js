import React from 'react';
import './navbar.css'

function navbar(props) {
    return (
        <div className="navigation-bar">
            <h3 className="brand-name">Black Spade</h3>
            <div className="navigation-links">
                <a className="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
            <input type="text" placeholder="Search" value={props.search} onChange={props.updateSearch} ></input>
        </div>
    );
}

export default navbar;