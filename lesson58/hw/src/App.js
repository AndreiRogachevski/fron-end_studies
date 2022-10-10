import React from 'react';
import { Counter } from './features/counter/Counter';
import List from './features/todos/List';
import Form from './features/todos/Form';

function App() {
  return (
    <div className="App">
      <Counter />
      <Form />
      <List />
    </div>
  );
}

export default App;
