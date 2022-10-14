import { useSelector, useDispatch } from 'react-redux';
import { selectUsers, setDeleteUser, usersAsync } from './usersSlice';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Users() {
  const deleted = useSelector(selectUsers).deleted;
  const users = useSelector(selectUsers).users.filter((u) => {
    return !deleted.includes(u.id);
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(usersAsync());
  }, []);
  return (
    <div>
      <ul className="users">
        {users.map((user) => (
          <li key={user.id}>
            <button onClick={() => dispatch(setDeleteUser(user.id))}>
              delete
            </button>
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
