import React from 'react';
export default class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.move = this.move.bind(this);
  }
  move(x, y) {
    this.props.onChangeMove(x, y);
  }
  render() {
    return (
      <React.Fragment>
        <button
          style={{ gridColumn: '2/3', gridRow: '1/2' }}
          onClick={() => this.move(0, -10)}
        >
          up
        </button>
        <button
          style={{ gridColumn: '3/4', gridRow: '2/3' }}
          onClick={() => this.move(10, 0)}
        >
          right
        </button>
        <button
          style={{ gridColumn: '2/3', gridRow: '3/4' }}
          onClick={() => this.move(0, 10)}
        >
          down
        </button>
        <button
          style={{ gridColumn: '1/2', gridRow: '2/3' }}
          onClick={() => this.move(-10, 0)}
        >
          left
        </button>
      </React.Fragment>
    );
  }
}
