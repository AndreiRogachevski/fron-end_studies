'use strict';
class NumButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: props.message };
  }
  click() {
    this.setState((state) => ({
      text: parseInt(state.text) + 1,
    }));
  }
  render() {
    return <button onClick={() => this.click()}>{this.state.text}</button>;
  }
}
class HideButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hide: undefined };
  }
  click() {
    this.setState((state) => ({
      state.hide='hidden'
    }));
  }
  render() {
    return <button {hide} onClick={() => this.click()}>Hide Me</button>;
  }
}
const root = ReactDOM.createRoot(document.getElementById('home-work'));

root.render(
  <React.Fragment>
    <NumButton message="0" />
    <HideButton />
  </React.Fragment>
);
