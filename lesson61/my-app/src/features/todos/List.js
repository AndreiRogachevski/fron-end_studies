import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ListItem from './ListItem';
import { fetchTodos, selectTodos } from './todosSlice';

export default function List() {
  const list = useSelector(selectTodos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <ul>
      {list.map((item,index) => (
        <ListItem key={index} item={item} />
      ))}
    </ul>
  );
}
