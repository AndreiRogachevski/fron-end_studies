import { useState, useEffect, Fragment } from 'react';
import Table from './Table.js';
import SelectedUser from './SelectedUser.js';
import Buttons from './Buttons.js';
import Select from './Select.js';
function App() {
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [skip, setSkip] = useState(0);
  const [itemsCount, setItemsCount] = useState(10);
  useEffect(() => {
    async function loadData() {
      const respons = await fetch(
        `http://dummyjson.com/users?skip=${skip}&limit=${itemsCount}`
      );
      const json = await respons.json();
      setUsers(json.users);
    }
    if (skip < 0) {
      setSkip(0);
    }
    if (skip >= 98) {
      setSkip(0);
    }
    loadData();
  }, [skip, itemsCount]);
  function selectedUserId(id) {
    setSelected(id);
  }
  function changePage(num) {
    setSkip(Number.parseInt(skip + num));
  }
  function addItemsCount(value) {
    setItemsCount(value);
    setSkip(skip + value);
  }
  return (
    <Fragment>
      <Buttons onChange={changePage} skip={itemsCount} />
      <Select onSetLimit={addItemsCount} />
      <div className="list">
        <Table users={users} select={selected} onSelectUser={selectedUserId} />
        <SelectedUser userId={selected} />
      </div>
    </Fragment>
  );
}

export default App;
