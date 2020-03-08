import React, { Component } from 'react';
import Block from './Block'
import './Board.css'
import Display from './Display'

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_number: "",
            current_operation: "",
            prev_number: 0,
        }
    }

    clickHandler = (input) => {
        let current_operation = this.state.current_operation
        let current_number = this.state.current_number
        let prev_number = this.state.prev_number

        if (typeof (input) == typeof (2)) {
            current_number = current_number.toString() + input.toString()
            this.setState({
                current_number: parseInt(current_number)
            })
        }
        else if ("/*+-".indexOf(input) > -1) {
            current_operation = input
            this.setState({
                current_operation: current_operation,
                prev_number: current_number,
                current_number: ""
            })
        }

        else if (input == '=') {
            let val = 0
            switch (current_operation) {
                case "+":
                    val = parseInt(prev_number) + parseInt(current_number)
                    break;
                case "-":
                    val = parseInt(prev_number) - parseInt(current_number)
                    break;
                case "/":
                    val = parseInt(prev_number) / parseInt(current_number)
                    break;
                case "*":
                    val = parseInt(prev_number) * parseInt(current_number)
                    break;
                default:
                    break;
            }
            val = val.toString().substring(0,8)
            this.setState({
                prev_number: current_number,
                current_number: val
            })
        }
        else if (input == "Clear") {
            this.setState({
                current_number: "",
                current_operation: "",
                prev_number: "",
            })
        }


    }


    render() {
        return (
            <div id="board" style={{display:"inline-block", height:"252px", padding:"0px", border : "2px solid black",marginTop:"200px"}}>
                <div className="row">
                    <Display value={this.state.current_number} prev_val={this.state.prev_number} width={198}></Display>
                </div>
                <div className="row">
                    <Block number={"Clear"} width={150} click={this.clickHandler} textcolor={"#6b6869"}></Block>
                    <Block number={"/"} width={50} click={this.clickHandler} color={"#f53155"} textcolor={"white"}></Block>
                </div>
                <div className="row">
                    <Block number={1} width={50} click={this.clickHandler}></Block>
                    <Block number={2} width={50} click={this.clickHandler}></Block>
                    <Block number={3} width={50} click={this.clickHandler}></Block>
                    <Block number={"-"} width={50} click={this.clickHandler} color={"#f53155"} textcolor={"white"}></Block>
                </div>
                <div className="row">
                    <Block number={4} width={50} click={this.clickHandler}></Block>
                    <Block number={5} width={50} click={this.clickHandler}></Block>
                    <Block number={6} width={50} click={this.clickHandler}></Block>
                    <Block number={"+"} width={50} click={this.clickHandler} color={"#f53155"} textcolor={"white"}></Block>
                </div>
                <div className="row">
                    <Block number={7} width={50} click={this.clickHandler}></Block>
                    <Block number={8} width={50} click={this.clickHandler}></Block>
                    <Block number={9} width={50} click={this.clickHandler}></Block>
                    <Block number={"="} width={50} click={this.clickHandler} color={"#f53155"} textcolor={"white"}></Block>
                </div>

            </div>
        );
    }
}

export default Board;