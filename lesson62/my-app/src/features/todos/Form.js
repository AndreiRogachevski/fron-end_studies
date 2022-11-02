import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { redirect, useNavigate, useParams } from 'react-router-dom';
import { addItem, editTodo } from './todosSlice';
export default function Form(props) {
  const { id } = useParams();
  const [value, setValue] = useState('');
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3000/todos');
      const data = await response.json();
      const currentItem = data.find((i) => +i.id === +id);
      if (currentItem) {
        setValue(currentItem.text);
        setCheck(currentItem.completed);
      }
    })();
  }, [id]);
  function handleSubmit(e) {
    e.preventDefault();
    if (value !== '') {
      switch (props.type.name) {
        case 'add':
          dispatch(addItem({ value, check }));
          break;
        case 'edit':
          dispatch(editTodo({ value, check, id }));
          break;
      }
      navigate('/');
    }
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        type="checkbox"
        checked={check}
        onChange={(e) => setCheck(e.target.checked)}
      />
      <input type="submit" value={props.type.name} />
    </form>
  );
}
