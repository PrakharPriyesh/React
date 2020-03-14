import React, { Component } from 'react';

class Display extends Component {
    render() {
        let w = this.props.width
        return (
            <div>
                <div style={{ width: w, height: "50px", border: "1px solid black", float: "left", fontSize: "25px", fontWeight: "bold", lineHeight: "50px", padding: "0px", textAlign: "center",color:"white", background:"#544646"}}>
                    {this.props.value}
                </div>

            </div>
        );
    }
}

export default Display;