import React, { Component } from 'react';
import Board from './Components/Numbers/Board'

class Home extends Component {
    render() {
        return (
            <div style={{textAlign:"center",height:"100%", width:"100%"}}>
                <Board></Board>
            </div>
        );
    }
}

export default Home;