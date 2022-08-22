class List extends React.Component {
  constructor(props) {
    super(props);
    const arrItems = [];
    for (let index = 1; index <= 15; index++) {
      arrItems.push(index);
    }
    this.state = {
      // numLi: 5,
      arrItems,
    };
  }
  addLi = () => {
    this.setState(() => ({
      arrItems: [...this.state.arrItems, this.state.numLi],
      numLi: ++this.state.numLi,
    }));
  };
  // change(index) {
  //   const arrItems = this.state.arrItems.map((num, i) => {
  //     i === index ? num + '!' : num;
  //   });
  //   console.log(arrItems);
  //   this.setState({ arrItems });
  // }
  sum(index) {
    let first = index !== 0 ? this.state.arrItems[index - 1] : 0;
    let second =
      index !== this.state.arrItems.length - 1
        ? this.state.arrItems[index + 1]
        : 0;
    const arrItems = this.state.arrItems.map((item, i) => {
      i === index ? first + second : item;
    });
    console.log(this.state.arrItems);
    console.log(arrItems);
    this.setState({ arrItems });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.arrItems.map((num, index) => (
            <li
              key={index}
              // onClick={() => this.change(index)}
              onClick={() => this.sum(index)}
            >
              {num}
            </li>
          ))}
        </ul>
        {/* <button onClick={this.addLi}>создать</button> */}
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
