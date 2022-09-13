import { useState } from 'react';
import './App.css';
import Form from './Form.js';
import List from './List.js';

function App() {
  const [list, setList] = useState([]);
  function handlePush(text) {
    setList([...list, text]);
  }
  function handleDelete(item, index) {
    setList(
      list.filter((items, i) => {
        return items !== item || i !== index;
      })
    );
  }
  return (
    <div>
      <Form onPush={handlePush} />
      <List list={list} onDeleteItem={handleDelete} />
    </div>
  );
}

export default App;
