import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './todosSlice';
export default function Form() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (value !== '') {
      dispatch(addItem(value));
      setValue('');
    }
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input type="submit" value="add" />
    </form>
  );
}
