import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(`http://dummyjson.com/users?limit=100`);
      const json = await response.json();
      setUsers(json.users);
    })();
  }, []);
  return (
    <div className="users">
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.image} alt="img" />
            <Link to={`/users/${user.id}`}>
              {user.firstName + ' ' + user.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
