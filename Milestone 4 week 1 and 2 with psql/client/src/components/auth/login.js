import React, { Component } from 'react';
import { connect } from "react-redux";
import { loginUser } from './../../store/actions/authActions';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    onChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginUser(userData)
    }

    render() {
        return (
            <div>
                <input type="text" id="email" placeholder="Email" onChange={this.onChange}></input>
                <br></br>
                <input type="text" id="password" placeholder="Password" onChange={this.onChange}></input>
                <br></br>
                <input type="submit" onClick={this.onSubmit}></input>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});


export default connect(mapStateToProps, { loginUser })(Login);