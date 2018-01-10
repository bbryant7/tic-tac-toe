import React, { Component } from "react";
import { connect } from "react-redux";
import Square from "../components/square.js";
import calculateWinner from "../components/Game";
import "../App.css";
import { myTurn, squares, restartGame, computersMove } from "../Actions/index";
import { bindActionCreators } from "redux";

class Board extends Component {
  handleClick(i) {
    this.props.myTurn();

    const squares = this.props.squares.squares;
    if (calculateWinner(squares)) {
      return;
    }

    let move = "X";
    if (this.props.turn) {
      move = "O";
    }
    this.props.squaresAction(i, move);
    this.props.computersMove(i, move);
  }

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    console.log("this.props", this.props);
    console.log("renderGame", this.props.restartGame);
    const winner = calculateWinner(this.props.squares.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.props.turn ? "O" : "X");
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
        <button onClick={() => this.props.restartGame()}>Play Again?</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    turn: state.turn,
    squares: state.squares,
    restart: state.resetGame
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      myTurn: myTurn,
      squaresAction: squares,
      restartGame: restartGame,
      computersMove: computersMove
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
