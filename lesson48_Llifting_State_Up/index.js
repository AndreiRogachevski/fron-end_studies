'use strict';
class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  addItem(item) {
    if (item !== '') this.setState({ items: [...this.state.items, item] });
  }
  removeItem(remItem) {
    console.log(remItem);
    const items = this.state.items.filter((item) => item !== remItem);
    this.setState({
      items,
    });
  }
  render() {
    return (
      <React.Fragment>
        <Remove items={this.state.items} onRemove={this.removeItem} />
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
    this.remove = this.remove.bind(this);
    this.state = {
      remItem: '',
    };
  }
  remove(e) {
    console.log(this.state.remItem);
    this.props.onRemove(e.target.value);
  }
  render() {
    return (
      <React.Fragment>
        {this.props.items.map((item, index) => (
          <p key={index} onClick={this.remove}>
            {this.setState({ remItem: item })}
            <button>remove</button>
            {item}
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
