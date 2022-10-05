import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
export default function List() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(`http://dummyjson.com/users?limit=100`);
      const json = await response.json();
      setUsers(json.users);
    })();
  }, []);
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <NavLink to={`/users/${user.id}`}>
              {user.firstName + ' ' + user.lastName}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
