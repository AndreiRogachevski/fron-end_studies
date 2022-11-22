import { useState, useEffect } from 'react';

import { useParams, Link, useNavigate } from 'react-router-dom';

export default function User(props) {
  const [user, setUser] = useState();
  let { userId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const response = await fetch(`https://reqres.in/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);
  function deleteUser(id) {
    (async () =>
      await fetch('https://reqres.in/api/users/' + id, {
        method: 'DELETE',
      }).then((res) => console.log(res)))();
  }
  function editUser(id) {
    navigate(`/${id}/edit`);
  }
  return (
    user && (
      <div>
        <Link to={'/'}>Back</Link>
        <p>
          <strong>{user.data.first_name + ' ' + user.data.last_name}</strong>
          <button onClick={() => editUser(user.data.id)}>edit</button>
          <button onClick={() => deleteUser(user.data.id)}>delete</button>
        </p>
        <p>{user.data.email}</p>
        <img src={user.data.avatar} alt="avatar" />
      </div>
    )
  );
}
