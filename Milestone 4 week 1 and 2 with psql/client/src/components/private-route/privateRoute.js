import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

//import React from 'react';

import React, { Component } from 'react';

class PrivateRoute extends Component {
    render() {
        console.log(this.props.auth.isAuthenticated, "Pro")
        return (this.props.auth.isAuthenticated ? <this.props.component /> : <Redirect to="/login" />)
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);






