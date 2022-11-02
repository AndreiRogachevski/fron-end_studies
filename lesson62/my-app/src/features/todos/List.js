import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, redirect, useNavigate } from 'react-router-dom';

import { deleteItem, fetchTodos, selectTodos } from './todosSlice';

export default function List() {
  const list = useSelector(selectTodos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  function toView(id) {
    navigate(`/${id}`);
    // window.location.assign(`/${id}`);
  }
  function toEdit(id) {
    navigate(`/${id}/edit`);
    // window.location.assign(`/${id}/edit`);
  }
  return (
    <>
      <Link to="/add">add new</Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TEXT</th>
            <th>STATUS</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, idx) => (
            <tr key={idx}>
              <td>{item.id}</td>
              <td>{item.text}</td>
              <td>{item.completed ? 'done' : 'neDone'}</td>
              <td>
                <button onClick={() => toView(item.id)}>VIEW</button>
                <button onClick={() => toEdit(item.id)}>EDIT</button>
                <button onClick={() => dispatch(deleteItem(item))}>
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
