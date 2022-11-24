import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { createUser, singleUser, updateUser } from './APIs';

export default function Form() {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  let { userId } = useParams();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (window.location.pathname === '/form') {
      createUser(name, job);
      navigate('/');
    } else if (window.location.pathname === `/${userId}/edit`) {
      updateUser(name, job);
      navigate('/');
    }
  }
  useEffect(() => {
    userId &&
      singleUser(userId).then((user) => {
        setName(user.data.first_name);
        setJob('hand - ass');
      });
  }, [userId]);
  return (
    <>
      <Link to={'/'}>Back</Link>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="first_name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="last_name"
          placeholder="Job"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <input type="submit" name="submit" value="send" />
      </form>
    </>
  );
}
