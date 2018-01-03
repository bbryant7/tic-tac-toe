import React, { Component } from "react";
import Square from "./square.js";
import "./App.css";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      isComputersTurn: false
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();

    if (this.state.isComputersTurn) {
      squares[i] = "X";
    } else {
      squares[i] = "O";
    }
    console.log(squares);
    this.setState({
      squares: squares,
      isComputersTurn: !this.state.isComputersTurn
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.isComputersTurn ? "X" : "O");
    }
    return (
      <div className="App">
        <h1> Tic-Tac-Toe </h1>
        <div className="status">{status}</div>

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

function calculateWinner(squares) {
  const winningOptions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  console.log("you in here?");
  for (let i = 0; i < winningOptions.length; i++) {
    let [a, b, c] = winningOptions[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {

      console.log("winner winner chicken dinner");
      console.log(squares[a]);
      return squares[a];

    }
  }
  return null;
}

// function doesMatch(squares, [a, b, c]) {
//   return squares[a] === squares[b] && squares[a] === squares[c]
// }

export default Board;
