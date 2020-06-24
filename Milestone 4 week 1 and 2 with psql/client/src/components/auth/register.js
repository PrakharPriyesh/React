import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { registerUser } from './../../store/actions/authActions';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {},
            registered: { success: false, message: "" }
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.registered.success) {
            this.props.history.push("/login");
        }
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        console.log(newUser);
        this.props.registerUser(newUser);
    };
    render() {
        let suc = this.props.registered.message === "Already" ? <div>Already Registered</div> : <></> 

        return (
            <div>
                {suc}
                <input type="text" id="name" placeholder="Name" onChange={this.onChange}></input>
                <br></br>
                <input type="text" id="email" placeholder="Email" onChange={this.onChange}></input>
                <br></br>
                <input type="text" id="password" placeholder="password" onChange={this.onChange}></input>
                <br></br>
                <input type="text" id="password2" placeholder="Confirm Password" onChange={this.onChange}></input>
                <br></br>
                <input type="submit" onClick={this.onSubmit}></input>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    registered: state.registered
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));