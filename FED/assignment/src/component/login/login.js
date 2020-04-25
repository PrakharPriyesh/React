import React, { useState } from 'react';
import './login.css';
import rpLogo from './../../asset/rp-logo.png';
import { Redirect } from 'react-router';

const Login = () => {

    const [loginState, changeLoginState] = useState(false);

    const onSignIn = () => {
        const userName = document.getElementById('login-username').value
        const userPass = document.getElementById('login-password').value
        const check = document.getElementById('login-checkbox').checked
        if (userName === 'a' || userName === "b") {
            if (check) {
                if (userPass === "b") {
                    localStorage.setItem("username", userName);
                    localStorage.setItem("userpass", userPass);
                    changeLoginState(!loginState)
                }
            }
            else {
                if (userName === 'a' || userName === "b") {
                    sessionStorage.setItem("username", userName);
                    sessionStorage.setItem("userpass", userPass);
                    changeLoginState(!loginState)
                }
            }
        }
    }

    if (loginState && sessionStorage.getItem("username")) {
        return (
            <Redirect to="/dashboard" />
        )
    }
    if (loginState && localStorage.getItem("username")) {
        return (
            <Redirect to="/dashboard" />
        )
    }

    return (
        <div className="login">
            <div className="login-rp-logo">
                <img src={rpLogo} alt={rpLogo} />
            </div>
            <div className="login-page-heading">
                WELCOME TO REDPANDA UI HTML - CSS BASIC FED TEMPLATE
            </div>
            <div className="login-description">
                The Red Pandas is a team of paragmatic engineers who care deeplu about the quality of their products and the success of their partners. Over the years, we have mastered best practice in building software products from concept to scale and we continue to learn emerging technologies.
            </div>
            <div className="login-card">
                <div className="login-card-heading">
                    PLEASE LOG IN
                </div>
                <div className="login-card-form">
                    <div className="login-card-form-username">
                        Username <br />
                        <input id="login-username" type="text" placeholder="Email or Username"></input>
                    </div>
                    <div className="login-card-form-password">
                        Password <br />
                        <input id="login-password" type="password" placeholder="Password"></input>
                    </div>
                    <div className="login-card-form-rememberme">
                        <span><input id="login-checkbox" type="checkbox"></input>Remember Me</span>
                    </div>
                    <div className="login-card-form-button">
                        <button onClick={onSignIn}>Sign In</button>
                    </div>
                </div>

            </div>
            <div className="login-footer">
                &copy; 2020 RedPanda. All Rights Reserved
            </div>
        </div>
    );
}

export default Login;