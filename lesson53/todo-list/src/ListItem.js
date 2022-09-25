import { useState, useEffect } from 'react';
import './ListItem.css';
export default function ListItem(props) {
  const [done, setDone] = useState(false);
  const [checked, setChecked] = useState(false);
  function deleteItem() {
    props.onDeleteItem(props.text);
  }
  function setDoneItem(event) {
    if (event.target.nodeName === 'LI') setDone(!done);
  }
  useEffect(() => {
    let list = document.querySelectorAll('input[type=checkbox]');
    props.onSetDoneItems(Array.from(list).some((element) => element.checked));
  }, [checked, props]);
  return (
    <li
      onClick={setDoneItem}
      className={done || (props.checkAll && checked) ? 'check' : ''}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      {props.text}
      <button onClick={deleteItem}>delete</button>
    </li>
  );
}
