import { useSelector, useDispatch } from 'react-redux';
import { selectUsers, setUsersId, usersAsync } from './usersSlice';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Users() {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(usersAsync());
  }, []);
  return (
    <div>
      <ul>
        {users.users.map((user) => (
          <li key={user.id}>
            <img src={user.image} alt="img" />
            <Link
              to={`/users/${user.id}`}
              onClick={() => dispatch(setUsersId(user.id))}
            >
              {user.firstName + ' ' + user.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
