// TASK 1

class MoveDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }
  moveDiv = (e) => {
    let y = this.state.y;
    let x = this.state.x;
    if (e.target.innerHTML === 'вверх') {
      y -= 10;
    }
    if (e.target.innerHTML === 'вниз') {
      y += 10;
    }
    if (e.target.innerHTML === 'вправо') {
      x += 10;
    }
    if (e.target.innerHTML === 'влево') {
      x -= 10;
    }
    this.setState({
      x,
      y,
    });
  };
  render() {
    return (
      <div
        className="arrow-div"
        style={{ top: this.state.y, left: this.state.x }}
        onClick={this.moveDiv}
      >
        <button>вверх</button>
        <button>влево</button>
        <button>вправо</button>
        <button>вниз</button>
      </div>
    );
  }
}

// TASK 2

const images = [
  'https://cdn.pixabay.com/photo/2019/10/15/13/40/winter-4551699_960_720.jpg',
  'https://cdn.pixabay.com/photo/2021/04/22/06/40/duck-6198196_960_720.jpg',
  'https://cdn.pixabay.com/photo/2021/04/17/23/58/bunny-6187026_960_720.jpg',
  'https://cdn.pixabay.com/photo/2020/09/18/21/16/child-5582985_960_720.jpg',
];

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayImg: props.arrayImg,
      numImg: 0,
      // img: '',
    };
  }
  changeImg = () => {
    let numImg = this.state.numImg;
    numImg === this.state.arrayImg.length - 1 ? (numImg = 0) : (numImg += 1);
    this.setState({ numImg });
  };
  // componentDidMount() {
  //   this.setState({
  //     img: this.state.arrayImg[this.state.numImg],
  //   });
  // }
  render() {
    return (
      <img
        src={this.state.arrayImg[this.state.numImg]}
        alt="img"
        onClick={this.changeImg}
      />
    );
  }
}

const root = ReactDOM.createRoot(document.querySelector('#home-work-45'));
root.render(
  <React.Fragment>
    <MoveDiv />
    <Image arrayImg={images} />
  </React.Fragment>
);
