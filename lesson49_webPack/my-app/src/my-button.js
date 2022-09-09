import React from 'react';
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState({ value: ++this.state.value });
  }
  render() {
    return <button onClick={this.increment}>{this.state.value}</button>;
  }
}
export default Button;
