import User from './User';
import sortIcon from '../assets/sort-solid.svg';
import { useEffect, useState } from 'react';
import fetchUsers from '../APIs/FetchUsers';
import sorting from '../functions/sorting';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [sort, setSort] = useState({ property: '', order: true });
  const [inputText, setInputText] = useState('');
  useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
  }, []);
  // TODO: issue render current state
  function sortTable(e) {
    let propertyName = e.textContent ? e.textContent : e.parentNode.textContent;
    setSort((currentSort) => ({ ...currentSort, property: propertyName }));
    if (propertyName === sort.property) {
      setSort((currentSort) => ({ ...currentSort, order: !sort.order }));
    } else {
      setSort(() => ({ property: propertyName, order: true }));
    }
  }
  useEffect(() => {
    switch (sort.property) {
      case 'name':
        setUsers(() => sorting(users, 'firstName'));
        break;
      case 'department':
        setUsers(() => sorting(users, 'company.department'));
        break;
      case 'city':
        setUsers(() => sorting(users, 'company.address.city'));
        break;
      case 'age':
        setUsers(() => sorting(users, 'age'));
        break;
      case 'email':
        setUsers(() => sorting(users, 'email'));
        break;
      default:
        break;
    }
    if (!sort.order) {
      setUsers((currentData) => currentData.reverse());
    }
  }, [sort, users]);
  function searchText(e) {
    setUsers(users.filter((user) => user));
  }
  return (
    <>
      <form>
        <input
          type="search"
          name="search"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onInput={(e) => searchText(e.target.value)}
        />
      </form>
      <table className="table table-striped">
        <thead>
          <tr>
            <th onClick={(e) => sortTable(e.target)}>
              name
              <img className="sortIcon" src={sortIcon} alt="sort" />
            </th>
            <th onClick={(e) => sortTable(e.target)}>
              department
              <img className="sortIcon" src={sortIcon} alt="sort" />
            </th>
            <th onClick={(e) => sortTable(e.target)}>
              city
              <img className="sortIcon" src={sortIcon} alt="sort" />
            </th>
            <th onClick={(e) => sortTable(e.target)}>
              age
              <img className="sortIcon" src={sortIcon} alt="sort" />
            </th>
            <th onClick={(e) => sortTable(e.target)}>
              email
              <img className="sortIcon" src={sortIcon} alt="sort" />
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <User user={user} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
