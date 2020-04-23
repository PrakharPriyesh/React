import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import './login.css';
import rpLogo from './../../asset/rp-logo.png';
import { Redirect } from 'react-router';

// Login.propTypes = {

// };

const Login = () => {

    const [loginState, changeLoginState] = useState(false);

    const onSignIn = () => {
        const userName = document.getElementById('login-username').value
        const userPass = document.getElementById('login-password').value
        
        if (userName === 'a' || userName === "b") {
            if (userPass === "b") {
                localStorage.setItem("username", userName);
                localStorage.setItem("userpass", userPass);
                changeLoginState(!loginState)
            }
        }
    }

    if (loginState && localStorage.getItem("username")) {
        return (
            <Redirect to="/dashboard" />
        )
    }

    return (
        <div className="login">
            <img className="rp-logo" src={rpLogo} alt={rpLogo}></img>
            <div className="login-heading">
                WELCOME TO REDPANDA UI HTML - CSS BASIC FED TEMPLATE
            </div>
            <div className="login-description">
                The Red Pandas is a team of paragmatic engineers who care deeplu about the quality of their products and the success of their partners. Over the years, we have mastered best practice in building software products from concept to scale and we continue to learn emerging technologies.
            </div>
            <div className="login-card">
                <div className="login-card-heading">
                    PLEASE LOG IN
                </div>
                <div className="login-form">
                    <div className="login-form-username">
                        Username <br />
                        <input id="login-username" type="text" placeholder="Email or Username"></input>
                    </div>
                    <div className="login-form-password">
                        Password <br />
                        <input id="login-password" type="password" placeholder="Password"></input>
                    </div>
                    <div className="login-form-rememberme">
                        <div>Remember Me</div>
                        <input type="checkbox"></input>
                    </div>
                    <div className="login-form-button">
                        <button onClick={onSignIn}>Sign In</button>
                    </div>
                </div>
            </div>
            <div className="footer">
                <font>&copy; 2020 RedPanda. All Rights Reserved</font>
            </div>
        </div>
    );
}

export default Login;