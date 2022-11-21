import { useState, useEffect } from 'react';

import { useParams, Link } from 'react-router-dom';

export default function User() {
  const [user, setUser] = useState();
  let { userId } = useParams();
  useEffect(() => {
    (async () => {
      const response = await fetch(`https://reqres.in/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);
  return (
    user && (
      <div>
        <Link to={'/'}>Back</Link>
        <p>
          <strong>{user.data.first_name + user.data.last_name}</strong>
        </p>
        <p>{user.data.email}</p>
        <img src={user.data.avatar} alt="avatar" />
      </div>
    )
  );
}
