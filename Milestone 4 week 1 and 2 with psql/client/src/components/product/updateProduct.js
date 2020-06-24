import React, { Component } from 'react';
import { connect } from 'react-redux';

class UpdateProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pid: "",
            name: "",
            price: "",
            description: ""
        }
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
    };

    render() {
        //setInterval(() => { console.log(this.props.auth.isAuthenticated, "updateProducts") }, 1000)
        return (
            <div>
                <input type="text" id="pid" placeholder="Product ID" onChange={this.onChange}></input>
                <br></br>
                <input type="text" id="name" placeholder="Product Name" onChange={this.onChange}></input>
                <br></br>
                <input type="text" id="price" placeholder="Product Price" onChange={this.onChange}></input>
                <br></br>
                <input type="text" id="description" placeholder="Product Description" onChange={this.onChange}></input>
                <br></br>
                <input type="submit" onClick={this.onSubmit}></input>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(UpdateProduct);