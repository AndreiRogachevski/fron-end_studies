import React from 'react';
export default class MoveDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }
  move = (e) => {
    let y = this.state.y;
    let x = this.state.x;
    if (e.target.innerHTML === 'вверх') {
      y -= 10;
    }
    if (e.target.innerHTML === 'вниз') {
      y += 10;
    }
    if (e.target.innerHTML === 'вправо') {
      x += 10;
    }
    if (e.target.innerHTML === 'влево') {
      x -= 10;
    }
    this.setState({
      x,
      y,
    });
  };
  render() {
    return (
      <div
        className="arrow-div"
        style={{ top: this.state.y, left: this.state.x }}
        onClick={this.move}
      >
        <button>вверх</button>
        <button>влево</button>
        <button>вправо</button>
        <button>вниз</button>
      </div>
    );
  }
}
