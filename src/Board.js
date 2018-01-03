import React, { Component } from 'react';
import Square from './square.js'
import './App.css';


class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      isComputersTurn: false,
    };
  }

  handleClick(i) {
  const squares = this.state.squares.slice();

   if(this.state.isComputersTurn){
     squares[i] = 'X'
   } else { squares[i] = 'O'} ;
   console.log(squares)
   console.log(squares.value)
  this.setState({
    squares: squares,
    isComputersTurn: !this.state.isComputersTurn,
  });
}

  renderSquare(i){
    return(<Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
          />
      )
  }

  render() {
    return (
      <div className="App">
      <h1> Tic-Tac-Toe </h1>
      <h3> Computer: X's</h3>
      <h3> You: O's </h3>

      <div className="board">
      <div className="row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        </div>
      <div className="row">
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
      </div>
      <div className="row">
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
      </div>
      </div>
      </div>
    );
  }
}

export default Board;
