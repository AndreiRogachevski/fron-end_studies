import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form(props) {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    (async () => {
      const response = await fetch('https://reqres.in/api/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, job }),
      });
      const user = await response.json();
      console.log(user);
      navigate('/');
    })();
  }
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
