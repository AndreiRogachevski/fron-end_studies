class MathForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: 0,
      second: 0,
      summ: 0,
      check: false,
    };
    this.handelSubmit = this.handelSubmit.bind(this);
    this.handelSubmitInputChange = this.handelSubmitInputChange.bind(this);
    this.checkChange = this.checkChange.bind(this);
  }
  handelSubmit(event) {
    event.preventDefault();
  }
  handelSubmitInputChange(event) {
    const keyName = event.target.name;
    const value = event.target.value === '' ? 0 : parseInt(event.target.value);
    const mathResult = !this.state.check
      ? keyName === 'first'
        ? value + parseInt(this.state.second)
        : value + parseInt(this.state.first)
      : keyName === 'first'
      ? value - parseInt(this.state.second)
      : parseInt(this.state.first) - value;
    this.setState({ [keyName]: value, summ: mathResult });
  }
  checkChange() {
    const check = this.state.check;
    const first = parseInt(this.state.first);
    const second = parseInt(this.state.second);
    const mathResult = check ? first + second : first - second;
    this.setState({ check: !check, summ: mathResult });
  }
  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        <input
          name="first"
          type="number"
          onInput={this.handelSubmitInputChange}
        />
        <input
          name="second"
          type="number"
          onInput={this.handelSubmitInputChange}
        />
        <span> = {this.state.summ}</span>
        <br />
        <input
          type="checkbox"
          checked={this.state.check}
          onChange={this.checkChange}
        />
      </form>
    );
  }
}
class ToDoS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      newItem: '',
    };
    this.handelSubmit = this.handelSubmit.bind(this);
    this.newValue = this.newValue.bind(this);
  }
  newValue(event) {
    this.setState({ newItem: event.target.value });
  }
  handelSubmit(event) {
    event.preventDefault();
    const items = this.state.items;
    console.log(items);
    items.push(this.state.newItem);
    this.setState({ items: items, newItem: '' });
  }
  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        <ul>
          {this.state.items.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <input
          type="text"
          value={this.state.newItem}
          onChange={this.newValue}
        />
        <input type="submit" />
      </form>
    );
  }
}
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.Fragment>
    <MathForm />
    <ToDoS />
  </React.Fragment>
);
