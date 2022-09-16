import { useState, useEffect, Fragment } from 'react';
import Table from './Table.js';
import SelectedUser from './SelectedUser.js';
import Buttons from './Buttons.js';
import Select from './Select.js';
function App() {
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [skip, setSkip] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    async function loadData() {
      const respons = await fetch(
        `http://dummyjson.com/users?skip=${skip}&limit=${perPage}`
      );
      const json = await respons.json();
      setTotal(json.total);
      setUsers(json.users);
    }
    loadData();
  }, [skip, perPage]);
  function selectedUserId(id) {
    setSelected(id);
  }
  function changePage(num) {
    setSkip(Number.parseInt(skip + num));
  }
  function addItemsCount(value) {
    setPerPage(value);
    setSkip(0);
  }
  function switchPage(number = 0) {
    setSkip((number - 1) * perPage);
  }
  return (
    <Fragment>
      <Buttons
        onChange={changePage}
        onChangePage={switchPage}
        skip={skip}
        perPage={perPage}
        total={total}
      />
      <Select onSetLimit={addItemsCount} />
      <div className="list">
        <Table users={users} select={selected} onSelectUser={selectedUserId} />
        <SelectedUser userId={selected} />
      </div>
    </Fragment>
  );
}

export default App;
