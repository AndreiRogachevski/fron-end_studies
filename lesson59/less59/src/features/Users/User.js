import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { userAsync } from './usersSlice';
export default function User() {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    setUser(dispatch(userAsync(id)));
  }, []);
  return (
    <div>
      <Link to={'/'}>Back</Link>
      {}
    </div>
  );
}
