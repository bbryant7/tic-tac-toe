import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as actions from './Actions/index.js';
import './App.css';

class Square extends Component {

constructor(){
  super();

  this.handleMove = this.handleMove.bind(this);
}
handleMove(){
  this.props.onClick()
}

  render() {
    return (
      <div>
        <div className="square"  onClick={this.handleMove}>{this.props.value}</div>
      </div>
    )
  }
}



export default Square;
