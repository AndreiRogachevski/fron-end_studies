class List extends React.Component {
  constructor(props) {
    super(props);
    const items = [];
    for (let index = 0; index <= 15; index++) {
      items.push(index);
    }
    this.state = {
      // numLi: 0,
      // items: [],
      items,
    };
  }
  addLi = () => {
    const items = [...this.state.items, this.state.numLi];
    this.setState(() => ({
      items,
      numLi: ++this.state.numLi,
    }));
  };
  change(index) {
    const items = this.state.items.map((num, i) => {
      i === index ? (num += '!') : num;
      return num;
    });
    this.setState({ items });
  }
  // sum(index) {
  //   let first = index !== 0 ? this.state.items[index - 1] : 0;
  //   let second =
  //     index !== this.state.items.length - 1 ? this.state.items[index + 1] : 0;
  //   const items = this.state.items.map((item, i) => {
  //     i === index ? (item = first + second) : item;
  //     return item;
  //   });

  //   this.setState({ items });
  // }
  multiplication(event, index) {
    event.preventDefault();
    let first = index !== 0 ? this.state.items[index - 1] : 0;
    let second =
      index !== this.state.items.length - 1 ? this.state.items[index + 1] : 0;
    const items = this.state.items.map((item, i) => {
      i === index ? (item = first * second) : item;
      return item;
    });

    this.setState({ items });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((num, index) => (
            <li
              key={index}
              onClick={() => this.change(index)}
              // onClick={() => this.sum(index)}
              onContextMenu={(event) => this.multiplication(event, index)}
            >
              {num}
            </li>
          ))}
        </ul>
        <button onClick={this.addLi}>создать</button>
      </div>
    );
  }
}
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.Fragment>
    <List />
  </React.Fragment>
);
