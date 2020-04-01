import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loggedIn: false
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        const { username, password } = this.state

        if (username == 'a' && password == 'a') {
            sessionStorage.setItem('id', 'red')
            sessionStorage.setItem('pass', "pandas")
            this.setState({
                loggedIn: true
            })
        }
    }

    render() {
        const { username, password, loggedIn } = this.state
        const sessionUser = sessionStorage.getItem("id")
        const sessionPassword = sessionStorage.getItem("pass")

        if (sessionUser != null || sessionPassword != null) {
            return <Redirect to="/sellers" />
        }

        if (loggedIn) {
            return <Redirect to="/sellers" />
        }

        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" placeholder="username" name="username" onChange={this.onChange} value={username} />
                    <br />
                    <input type="password" placeholder="password" name="password" onChange={this.onChange} value={password} />
                    <input type="submit" />
                </form>

            </div>
        );
    }
}

export default Login;