import { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
// import { userAsync } from './usersSlice';
function toList(obj) {
  return console.log(obj);
}
export default function User() {
  const [user, setUser] = useState({});
  const { id } = useParams();
  // const dispatch = useDispatch();
  useEffect(() => {
    // setUser(dispatch(userAsync(id)));
    (async () => {
      const response = await fetch('https://dummyjson.com/users/' + id);
      const json = await response.json();
      setUser(json);
      console.log(json);
    })();
  }, [id]);
  const keys = Object.keys(user);
  return (
    <div>
      <Link to={'/'}>Back</Link>
      <img src={user.image} alt="img" />
      <table>
        <thead>
          <tr>
            {keys.map((key, index) => (
              <th key={index}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.keys(user).map((key, index) => (
              <td key={index}>{user[key] === 'object' ? key : user[key]}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
