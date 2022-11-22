import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Form(props) {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  let { userId } = useParams();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (window.location.pathname === '/form') {
      (async () => {
        const response = await fetch('https://reqres.in/api/users/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, job }),
        });
        if (response.ok) {
          console.log(`status:${response.status}\n User successfully create`);
        }
        navigate('/');
      })();
    } else if (window.location.pathname === `/${userId}/edit`) {
      (async () => {
        const response = await fetch('https://reqres.in/api/users/', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, job }),
        });
        if (response.ok) {
          console.log(`status:${response.status}\n User successfully edited`);
        }
        navigate('/');
      })();
    }
  }
  useEffect(() => {
    userId &&
      (async () => {
        const response = await fetch(`https://reqres.in/api/users/${userId}`);
        const user = await response.json();
        setName(user.data.first_name);
        setJob('hand - ass');
      })();
  }, [userId]);
  return (
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
  );
}
