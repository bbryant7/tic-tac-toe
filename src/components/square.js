import React, { Component } from "react";
import "../App.css";

class Square extends Component {
  constructor() {
    super();

    this.handleMove = this.handleMove.bind(this);
  }
  handleMove() {
    this.props.onClick();
  }

  render() {
    return (
      <div>
        <div className="square" onClick={this.handleMove}>
          {this.props.value}
        </div>
      </div>
    );
  }
}

export default Square;
