import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// import ListItem from './ListItem';
import { deleteItem, fetchTodos, selectTodos } from './todosSlice';

export default function List() {
  const list = useSelector(selectTodos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <>
      {/* <ul>
        {list &&
          list.map((item, index) => <ListItem key={index} item={item} />)}
      </ul> */}
      <Link to='/add'>add new</Link>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>text</th>
            <th>status</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.text}</td>
              <td>{item.completed ? 'done ' : 'inProgess '}</td>
              <td>
                <button><Link to={item.id}>view</Link></button>
                <button><Link to='' >edit</Link></button>
                <button onClick={() => dispatch(deleteItem(item))}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
