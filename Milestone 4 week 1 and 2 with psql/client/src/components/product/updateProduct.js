import React, { Component } from 'react';
import { connect } from 'react-redux';

import {updateProductDetails} from './../../javascript/api';

class UpdateProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pid: "",
            name: "",
            amount: "",
            description: "",
        }
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const data = this.state;
        updateProductDetails(data).then(res => {
            window.location.reload()
        }).catch(err => {
            alert(err)
        })
    };

    render() {
        //setInterval(() => { console.log(this.props.auth.isAuthenticated, "updateProducts") }, 1000)
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <input type="text" id="pid" placeholder="Product ID" onChange={this.onChange}></input>
                <br></br>
                <input type="text" id="name" placeholder="Product Name" onChange={this.onChange}></input>
                <br></br>
                <input type="text" id="amount" placeholder="Product Price" onChange={this.onChange}></input>
                <br></br>
                <input type="text" id="description" placeholder="Product Description" onChange={this.onChange}></input>
                <br></br>
                <input type="submit" ></input>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(UpdateProduct);