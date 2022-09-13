import React from 'react';
import Buttons from './Buttons.js';
export default class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 20,
      y: 20,
    };
    this.move = this.move.bind(this);
  }
  move(x, y) {
    this.setState({ x: this.state.x + x, y: this.state.y + y });
  }
  render() {
    return (
      <div className="arrows" style={{ top: this.state.y, left: this.state.x }}>
        <Buttons onChangeMove={this.move} />
      </div>
    );
  }
}
