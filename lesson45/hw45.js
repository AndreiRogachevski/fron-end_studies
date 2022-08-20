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
      img: '',
    };
  }
  componentDidMount() {
    this.setState({
      img: this.state.arrayImg[0],
    });
  }
  // changeImg() {
  //   for (let index = 0; index < images.length; index++) {
  //     const element = images[index];
  //   }
  //   this.setState({
  //     img: element,
  //   });
  // }

  render() {
    <img src={this.state.img} alt="img" />;
    console.log(this.state.img);
  }
}

const root = ReactDOM.createRoot(document.querySelector('#home-work-45'));
root.render(<Image arrayImg={images} />);
