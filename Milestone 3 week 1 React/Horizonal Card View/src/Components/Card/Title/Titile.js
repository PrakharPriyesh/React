import React from "react";

export default class Title extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
        <div style={{ position: "absolute" , border: "1px solid black", width: "380px", height:"50px",left:"190px", top: "5px", padding: "10px"}}>
            <h1 style={{textAlign: "left", margin: "0px"}}>{this.props.title}</h1>
        </div>
        )
    }
}