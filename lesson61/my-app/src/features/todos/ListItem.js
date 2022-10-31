import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem, editTodo } from './todosSlice';

export default function ListItem({ item }) {
  const [value, setValue] = useState(item.text);
  const [edit, setEdit] = useState(false);
  const [completed, setCompleted] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    setValue(item.text);
    setCompleted(item.completed);

  }, [item]);
  function handleDispatch(id, value, completed) {
    setEdit(!edit);
    dispatch(editTodo({ id, value, completed }));
  }
  return (
    <li>
      {edit ? (
        <>
          <button onClick={() => handleDispatch(item.id, value, completed)}>edit</button>
          <input
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => {setCompleted(e.target.checked)}}
          />
        </>
      ) : (
        <>
          <button onClick={() => setEdit(!edit)}>edit</button>
          <span>{item.completed?'done ':'inProgess '}</span>
          <span>{item.text}</span>

        </>
      )}
      <button onClick={() => dispatch(deleteItem(item))}>delete</button>
    </li>
  );
}
