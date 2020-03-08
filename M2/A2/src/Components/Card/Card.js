import React from "react";
import Photo from './Photo/Photo'
import Title from './Title/Titile'
import Description from './Description/Description'

export default class Card extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="card" style={{position: "relative", border: "2px solid black", width: "600px", height:"200px"}}>
                <Photo url={this.props.url}></Photo>
                <Title title={this.props.title}></Title>
                <Description des={this.props.des}></Description>
            </div>
        )

    }
}