import React, { Component } from 'react';
import './App.css';

class Square extends Component {

  constructor(props){
    super(props)

    this.state = {
      value: null
    }

  this.handleMove = this.handleMove.bind(this)
  };
handleMove(){
  this.setState({
    value: 'X',
  })
console.log(this.state.value)
}


  render() {
    return (
      <div>
        <div className="square"  onClick={this.handleMove}>{this.state.value}</div>
      </div>
    )
  }
}

export default Square;
