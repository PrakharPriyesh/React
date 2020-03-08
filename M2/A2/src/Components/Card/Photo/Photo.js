import React from "react";

export default class Photo extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div id="photo" style={{ position: "absolute" , border: "1px solid black", width: "180px", height: "185px",left:"5px", top: "5px"}}>
                <img style={{width: "180px", height: "185px" }} src={this.props.url}></img>
            </div>
        )
    }
}