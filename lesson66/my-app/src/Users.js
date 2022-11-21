import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Users() {
  const [users, setUsers] = useState();
  useEffect(() => {
    (async () => {
      const response = await fetch('https://reqres.in/api/users/?per_page=15');
      const json = await response.json();
      setUsers(json);
    })();
  }, [setUsers]);
  console.log(users);
  function userDel(id) {
    fetch('https://reqres.in/api/users/' + id, {
      method: 'DELETE',
    }).then((res=>console.log(res)));
  }
  return (
    <>
      <Link to={'/form'}>Form</Link>
      {users &&
        users.data.map((user) => (
          <div key={user.id}>
            <p>
              <strong>{user.first_name + user.last_name}</strong>
              <button onClick={() => userDel(user.id)}>delete</button>
            </p>
            <a href={`mailto:${user.email}`}>{user.email}</a>
            <Link to={`${user.id}`}>
              <img src={user.avatar} alt="avatar" />
            </Link>
          </div>
        ))}
    </>
  );
}
