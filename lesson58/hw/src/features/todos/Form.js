import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from './todosSlice';

export default function Form() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  function addToList(e) {
    e.preventDefault();
    dispatch(add(value));
    setValue('');
  }
  return (
    <form onSubmit={addToList}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}
