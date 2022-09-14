import { useState, Fragment } from 'react';
import Form from './Form.js';
import List from './List.js';
function App() {
  const [list, setList] = useState([]);
  function addItem(text) {
    setList([...list, text]);
  }
  function remove(item) {
    setList(list.filter((i) => i !== item));
  }
  return (
    <Fragment>
      <Form onAddItem={addItem} />
      <List list={list} onRemove={remove} />
    </Fragment>
  );
}

export default App;
