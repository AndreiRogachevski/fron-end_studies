'use strict';
class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.addItem = this.addItem.bind(this);
    this.remove = this.remove.bind(this);
  }
  addItem(item) {
    this.setState({ items: [...this.state.items, item] });
  }
  remove(remItem) {
    this.setState({
      items: this.state.items.filter((item) => item !== remItem),
    });
  }
  render() {
    return (
      <React.Fragment>
        <Remove items={this.state.items} onRemove={this.remove} />
        <Form onAddItem={this.addItem} />
      </React.Fragment>
    );
  }
}
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
    };
    this.pushItem = this.pushItem.bind(this);
  }
  pushItem(e) {
    e.preventDefault();
    this.props.onAddItem(this.state.item);
    this.setState({ item: '' });
  }
  render() {
    return (
      <form onSubmit={this.pushItem}>
        <input
          type="text"
          value={this.state.item}
          onChange={(e) => this.setState({ item: e.target.value })}
        />
        <input type="submit" />
      </form>
    );
  }
}
class Remove extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      remItem: '',
    };
    this.remove = this.remove.bind(this);
  }

  remove(e) {
    this.setState({ item: e.target.value });
    this.props.onRemove(this.state.remItem);
  }
  render() {
    return (
      <React.Fragment>
        {this.props.items.map((item, index) => (
          <p>
            <button onClick={this.remove}>remove</button>
            <span key={index}>{item}</span>
          </p>
        ))}
      </React.Fragment>
    );
  }
}
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.Fragment>
    <Show />
  </React.Fragment>
);
