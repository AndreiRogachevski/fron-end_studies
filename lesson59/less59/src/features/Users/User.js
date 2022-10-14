import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { setDeleteUser } from './usersSlice';

export default function User() {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const response = await fetch('https://dummyjson.com/users/' + id);
      const json = await response.json();
      setUser(json);
    })();
  }, [id]);
  return (
    <div>
      <Link to={'/'}>Back</Link>
      <Link to={'/'}>
        <button
          onClick={() => {
            dispatch(setDeleteUser(user.id));
          }}
        >
          delete
        </button>
      </Link>
      <div className="user">
        <img src={user.image} alt="img" />
        <ul>
          <li>{user.firstName + ' ' + user.lastName}</li>
          <li>{user.company?.title}</li>
          <li>{user.address?.city}</li>
        </ul>
      </div>
    </div>
  );
}
