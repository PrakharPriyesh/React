import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import './navbar.css'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logout: false
        }
    }

    logoutHandler = () => {
        sessionStorage.removeItem("id", null)
        sessionStorage.removeItem("pass", null)
        this.setState({
            logout: true
        })
    }

    render() {
        const { search, updateSearch } = this.props

        if (this.state.logout) {
            return <Redirect to="/login" />
        }

        return (
            <div className="navigation-bar">
                <h3 className="brand-name">Black Spade</h3>
                <div className="navigation-links">
                    <a className="active" href="http://localhost:3000/sellers">Sellers</a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                    <a href="http://localhost:3000/about">About</a>
                </div>
                <button className="navbar-logout-button" onClick={this.logoutHandler}>Logout</button>
                <input type="text" placeholder="Search" value={search} onChange={updateSearch} ></input>

            </div>
        );
    }
}

Navbar.propTypes = {
    search : PropTypes.string,
    updateSearch: PropTypes.func
};


export default Navbar;