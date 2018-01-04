import React, { Component } from "react";
import Square from "../components/square.js";
import calculateWinner from "../components/Game";
import "../App.css";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      isComputersTurn: false,
      buttonStyle: "none"
    };

    this.resetGame = this.resetGame.bind(this);
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares)) {
      this.setState({
        buttonStyle: "block"
      });
      return;
    }
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

  resetGame() {
    this.setState({
      squares: Array(9).fill(null),
      isComputersTurn: false
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
    let buttonStyle = {
      display: this.props.buttonStyle
    };
    console.log("buttonStyle", this.props.buttonStyle);
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
        <h3> Computer is X | You are 0 </h3>
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
        <button style={buttonStyle} onClick={this.resetGame}>
          {" "}
          Play Again?{" "}
        </button>
      </div>
    );
  }
}

export default Board;
