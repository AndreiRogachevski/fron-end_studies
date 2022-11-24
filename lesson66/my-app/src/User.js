import { useState, useEffect } from 'react';

import { useParams, Link, useNavigate } from 'react-router-dom';
import { deleteUser, singleUser } from './APIs';

export default function User({ total }) {
  const [user, setUser] = useState();
  let { userId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    singleUser(userId).then((user) => setUser(user));
  }, [userId]);
  function editUser(id) {
    navigate(`/${id}/edit`);
  }
  function switchUser(int) {
    if (+userId + int < 1) {
      navigate(`/${total}`);
    } else if (+userId + int > total) {
      navigate('/1');
    } else {
      navigate(`/${+userId + int}`);
    }
  }
  return (
    user && (
      <div>
        <Link to={'/'}>Back</Link>
        <button onClick={() => switchUser(-1)}>previous</button>
        <button onClick={() => switchUser(+1)}>next</button>
        <p>
          <strong>{user.data.first_name + ' ' + user.data.last_name}</strong>
          <button onClick={() => editUser(user.data.id)}>📝</button>
          <button onClick={() => deleteUser(userId)}>☠️</button>
        </p>
        <p>{user.data.email}</p>
        <img src={user.data.avatar} alt="avatar" />
      </div>
    )
  );
}
