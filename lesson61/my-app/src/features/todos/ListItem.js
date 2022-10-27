import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem, editTodo } from './todosSlice';

export default function ListItem({ item }) {
  const [value, setValue] = useState(item.todo);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setValue(item.todo)
  }, [edit,item]);
  function handleDispatch(id, value) {
    setEdit(!edit);
    dispatch(editTodo({ id, value }));
  }
  return (
    <li>
      {edit ? (
        <>
          <button onClick={() => handleDispatch(item.id, value)}>edit</button>
          <input
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </>
      ) : (
        <>
          <button onClick={() => setEdit(!edit)}>edit</button>
          <span>{item.todo}</span>
        </>
      )}
      <button onClick={() => dispatch(deleteItem(item))}>delete</button>
    </li>
  );
}
