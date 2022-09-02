// 'use strict';
class Todos extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      items: [],
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => this.setState({ items: data }))
      .catch((e) => console.error(e))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }
  removeItem(id) {
    const items = this.state.items.filter((item) => item.id !== id);
    this.setState({ items });
  }
  randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  changeColor(e, id) {
    e.preventDefault();
    const items = this.state.items.map((item) => {
      if (item.id === id) {
        item.background = this.randomColor();
        item.color = 'white';
      }
      return item;
    });
    this.setState({ items });
  }
  render() {
    const loading = this.state.isLoading;
    return (
      <div>
        {loading && <h1>Loading</h1>}
        <ul>
          {this.state.items.map((item) => (
            // item.completed &&
            <li
              style={{ background: item.background, color: item.color }}
              key={item.id}
              onClick={() => this.removeItem(item.id)}
              onContextMenu={(e) => this.changeColor(e, item.id)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
const root = ReactDOM.createRoot(document.querySelector('#todos'));
root.render(<Todos />);
