import User from './User';
import sortIcon from '../assets/sort-solid.svg';
import sort from '../functions/sort';
import { useEffect, useState } from 'react';
import fetchUsers from '../APIs/FetchUsers';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [sort, setSort] = useState({ property: '', order: true });
  useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
  }, []);
  useEffect(() => {}, [sort]);
  console.log(users);
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th onClick={(e) => sort(e.target.textContent)}>
            name
            <img className="sortIcon" src={sortIcon} alt="sort" />
          </th>
          <th onClick={(e) => sort(e.target.textContent)}>
            department
            <img className="sortIcon" src={sortIcon} alt="sort" />
          </th>
          <th onClick={(e) => sort(e.target.textContent)}>
            city
            <img className="sortIcon" src={sortIcon} alt="sort" />
          </th>
          <th onClick={(e) => sort(e.target.textContent)}>
            age
            <img className="sortIcon" src={sortIcon} alt="sort" />
          </th>
          <th onClick={(e) => sort(e.target.textContent)}>
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
  );
}
