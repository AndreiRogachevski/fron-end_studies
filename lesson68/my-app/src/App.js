import pic from './cat.jpg';
import './App.css';
import { useRef, useState } from 'react';
export default function App() {
  const container = useRef(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  function handleZoom(e) {
    const width = container.current.offsetWidth;
    const height = container.current.offsetHeight;
    let localX = e.clientX - e.target.offsetLeft;
    let localY = e.clientY - e.target.offsetTop;
    const percentX = Math.ceil((localX / width) * 100);
    const percentY = Math.ceil((localY / height) * 100);
    setX(percentX + '%');
    setY(percentY + '%');
  }
  return (
    <div
      className="img"
      ref={container}
      style={{ backgroundPositionX: x, backgroundPositionY: y }}
      onMouseMove={(e) => handleZoom(e)}
    >
      <img src={pic} alt="pic" />
    </div>
  );
}
