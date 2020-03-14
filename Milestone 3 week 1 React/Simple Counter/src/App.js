import React from 'react';
import logo from './logo.svg';
import './App.css';
import Buttons from './Components/Button/Buttons'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
  }

  handleClick = (i) => {
    const a = i ? this.state.value + 1 : this.state.value - 1
    this.setState({
      value: a
    })
  }

  render() {
    return (
      <div className="App">
        <Buttons click={this.handleClick} value={this.state.value}></Buttons>
      </div>
    );
  }
}

export default App;
