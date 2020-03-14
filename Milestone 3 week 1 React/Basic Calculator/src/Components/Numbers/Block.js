import React, { Component } from 'react';
import './block.css';

class Block extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        const w = this.props.width
        const c = this.props.color
        const t = this.props.textcolor
        //console.log(typeof(this.props.number), "props" ,this.props.number)
                
        return (
            <button className="button" 
            style=
            {{width: w, height: "50px", border: "1px solid black", float: "left" ,fontSize: "25px", fontWeight:"bold", lineHeight:"35px", padding:"0px",textAlign:"center", background: c, color:t}}
            onClick={() => this.props.click(this.props.number)}>
                {this.props.number}
            </button>
        );
    }
}

export default Block;