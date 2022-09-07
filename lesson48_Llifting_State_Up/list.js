'use strict';
const items = [];
for (let index = 1; index <= 15; index++) {
  items.push(index);
}

function math(eventIndex, array, sing) {
  const previous = eventIndex === 0 ? 0 : array[eventIndex - 1];
  const next = eventIndex === array.length - 1 ? 0 : array[eventIndex + 1];
  const items = array.map((item, index) => {
    if (eventIndex !== index) return item;
    switch (sing) {
      case 'addition':
        return (item = previous + next);
        break;
      case 'multiplication':
        return (item = previous * next);
        break;
    }
  });
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
  addition(eventIndex) {
    this.setState({
      items: math(eventIndex, this.state.items, 'addition'),
    });
  }
  multiplication(eventIndex) {
    this.setState({
      items: math(eventIndex, this.state.items, 'multiplication'),
    });
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
