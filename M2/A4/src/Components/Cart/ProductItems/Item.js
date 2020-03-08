import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <div style={{ position: "relative",border:"1px solid black",width: "300px", height:"400px"}}>

                <div id="photo" style={{ position: "absolute", border: "1px solid black", width: "180px", height: "185px", left: "5px", top: "5px" }}>
                    <img style={{ width: "180px", height: "185px" }} src={this.props.img}></img>
                </div>

                <div style={{ position: "absolute", border: "1px solid black", width: "380px", height: "50px", left: "190px", top: "5px", padding: "10px" }}>
                    <h1 style={{ textAlign: "left", margin: "0px" }}>{this.props.name}</h1>
                </div>

                <div style={{ position: "absolute", border: "1px solid black", width: "384px", height: "95px", left: "190px", top: "80px", padding: "8px" }}>
                    <p style={{ textAlign: "justify", margin: "0px" }}>{this.props.price}</p>
                </div>
            </div>
        );
    }
}

export default Item;