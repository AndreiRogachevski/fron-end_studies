'use strict';
const items = [];
for (let index = 1; index <= 15; index++) {
  items.push(index);
}
const mathOperators = {
  a: 'addition',
  m: 'multiplication',
};
function math(newIndex, array, sing) {
  const previous = newIndex === 0 ? 0 : array[newIndex - 1];
  const next = newIndex === array.length - 1 ? 0 : array[newIndex + 1];
  const items = array.map((item, index) =>
    newIndex === index
      ? sing === mathOperators.a
        ? (item = previous + next)
        : (item = previous * next)
      : item
  );
  return items;
}
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: items,
    };
    this.addition = this.addition.bind(this);
    this.multiplication = this.multiplication.bind(this);
  }
  addition(newIndex) {
    this.setState({ items: math(newIndex, this.state.items, mathOperators.a) });
  }
  multiplication(newIndex) {
    this.setState({ items: math(newIndex, this.state.items, mathOperators.m) });
  }
  render() {
    return (
      <ul>
        <ListItem
          items={this.state.items}
          onLeftClick={this.addition}
          onRightClick={this.multiplication}
        />
      </ul>
    );
  }
}
class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
  }
  handleLeftClick(index) {
    this.props.onLeftClick(index);
  }
  handleRightClick(event, index) {
    event.preventDefault();
    this.props.onRightClick(index);
  }
  render() {
    return this.props.items.map((item, index) => (
      <li
        key={index}
        onClick={() => this.handleLeftClick(index)}
        onContextMenu={(event) => this.handleRightClick(event, index)}
      >
        {item}
      </li>
    ));
  }
}
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.Fragment>
    <List />
  </React.Fragment>
);
