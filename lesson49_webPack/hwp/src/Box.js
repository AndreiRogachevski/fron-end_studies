import { Component } from 'react';
import Buttons from './Buttons.js';
export default class Box extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Buttons />
      </>
    );
  }
}
