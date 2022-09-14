import { useState, useEffect, Fragment } from 'react';
import Table from './Table.js';
import SelectedUser from './SelectedUser.js';
import Buttons from './Buttons.js';
function App() {
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState();
  const [skip, setSkip] = useState(0);
  // const [limit, setLimit] = useState(20);
  useEffect(() => {
    async function loadData() {
      const respons = await fetch('http://dummyjson.com/users');
      const json = await respons.json();
      json.skip = skip;
      setUsers(json.users);
    }
    loadData();
  }, [skip]);
  function selectedUserId(id) {
    setSelected(id);
  }
  function changePage(num) {
    setSkip(skip + num);
    // setLimit(limit + num);
  }
  return (
    <Fragment>
      <Buttons onChange={changePage} />
      <div className="list">
        <Table users={users} select={selected} onSelectUser={selectedUserId} />
        <SelectedUser userId={selected} />
      </div>
    </Fragment>
  );
}

export default App;
