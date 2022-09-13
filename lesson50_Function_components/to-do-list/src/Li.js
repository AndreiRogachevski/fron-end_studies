import { useState } from 'react';

export default function Li(props) {
  const [check, setCheck] = useState(false);
  function handleDelete(item) {
    props.onDeleteItem(item);
  }
  function handleCheck(e) {
    setCheck(e.target.checked);
  }
  return (
    <li className={check ? 'check' : ''}>
      <button onClick={() => handleDelete(props.item)}>delete</button>
      {props.item}
      <input type="checkbox" checked={check} onChange={(e) => handleCheck(e)} />
    </li>
  );
}
