import Button from './my-button.js';
import ShowImg from './ShowImg.js';
const url = [
  'https://pbs.twimg.com/profile_images/1430135961724375055/MUaARC5h_400x400.jpg',
  'https://pbs.twimg.com/profile_images/875766338081312772/m1UiRwLF_400x400.jpg',
  'https://tinycosmonauts.com/wp-content/uploads/2018/11/Nave-1.jpg',
];
function App() {
  return (
    <div className="App">
      <Button />
      <ShowImg url={url} />
    </div>
  );
}

export default App;
