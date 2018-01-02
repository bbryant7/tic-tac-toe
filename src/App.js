import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1> Tic-Tac-Toe </h1>

      <div className="board">
      <div className="row">
        <div className="square">1</div>
        <div className="square">2</div>
        <div className="square">3</div>
        </div>
      <div className="row">
        <div className="square">4</div>
        <div className="square">5</div>
        <div className="square">6</div>
      </div>
      <div className="row">
        <div className="square">7</div>
        <div className="square">8</div>
        <div className="square">9</div>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
