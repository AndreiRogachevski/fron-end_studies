import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem } from './todosSlice';

export default function Item({ text, index }) {
  const dispatch = useDispatch();
  return (
    <li>
      <button onClick={() => dispatch(deleteItem({ text, index }))}>
        delete
      </button>
      {text}
    </li>
  );
}
