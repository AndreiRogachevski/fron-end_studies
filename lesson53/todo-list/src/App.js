import { useState } from 'react';
import Form from './Form';
import List from './List';

function App() {
  const [list, setList] = useState([]);
  function addItem(item) {
    setList([...list, item]);
  }
  function deleteItem(item, index) {
    setList(list.filter((it, ind) => it !== item || ind !== index));
  }
  return (
    <div>
      <Form onAddItem={addItem} />
      <List items={list} onDeleteItem={deleteItem} />
    </div>
  );
}

export default App;
