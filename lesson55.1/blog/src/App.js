import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3000/posts');
      const json = await response.json();
      setData(json);
    })();
  }, []);

  return (
    <div className="App">
      {data.map((item, index) => (
        <div>
          <img src={item.image} alt="img" style={{ width: 100 }} />
          <p key={index}>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
