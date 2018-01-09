import React, { Component } from "react";
import { connect } from "react-redux";
import Square from "../components/square.js";
import calculateWinner from "../components/Game";
import "../App.css";
import { myTurn, squares, restartGame } from "../Actions/index";
import { bindActionCreators } from "redux";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null)
    };
  }

  handleClick(i) {
    this.props.myTurn();

    const squares = this.state.squares.slice();
    if (calculateWinner(squares)) {
      return;
    }
    if (!this.props.turn) {
      squares[i] = "X";
    } else {
      squares[i] = "O";
    }

    this.setState({
      squares: squares
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
    console.log("this.props", this.props);
    console.log("restartState", this.props.restartGame);
    console.log("myTurn", this.props.myTurn);

    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.props.turn ? "X" : "O");
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
        <button onClick={this.props.restartGame}>Play Again?</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("New State: ", state);
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
      restartGame: restartGame
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
