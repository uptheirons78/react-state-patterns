import React, { Component } from 'react';
import './Ball.css';

//prettier-ignore
class Ball extends Component {
  render() {
    const { ball } = this.props;

    return <div className="Ball">{ ball }</div>;
  }
}

export default Ball;
