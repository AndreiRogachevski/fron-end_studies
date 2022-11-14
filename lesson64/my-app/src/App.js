import React from 'react';
import json from './areas.json';
import InnerItem from './InnerItem';
function App() {
  return (
    <div className="App">
      <InnerItem items={json} />
    </div>
  );
}

export default App;
