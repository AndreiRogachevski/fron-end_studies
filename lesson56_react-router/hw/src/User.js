import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function User() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    (async () => {
      const response = await fetch(`http://dummyjson.com/users/${id}`);
      const json = await response.json();
      setUser(json);
    })();
  }, [id]);
  return (
    <div className="user">
      <Link to={'/'}>Back</Link>
      {user && (
        <>
          <img src={user.image} alt="img" />
          <ul>
            <li>First Name: {user.firstName}</li>
            <li>Last Name: {user.lastName}</li>
            <li>Age: {user.age}</li>
          </ul>
        </>
      )}
    </div>
  );
}
