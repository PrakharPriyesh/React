import React from "react";

export default class Description extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
        <div style={{ position: "absolute", border: "1px solid black", width: "384px", height:"95px",left:"190px", top: "80px" , padding:"8px"}}>
            <p style={{textAlign: "justify", margin: "0px"}}>{this.props.des}</p>
        </div>
        )
    }
}