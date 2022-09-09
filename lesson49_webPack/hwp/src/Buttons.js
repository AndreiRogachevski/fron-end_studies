import { Component } from 'react';
export default class Buttons extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <button>up</button>
        <button>right</button>
        <button>down</button>
        <button>left</button>
      </>
    );
  }
}
