import { useState, useEffect } from 'react';
import './ListItem.css';
export default function ListItem(props) {
  const [done, setDone] = useState(false);
  function deleteItem() {
    props.onDeleteItem(props.text);
  }
  function setDoneItem(event) {
    if (event.target.nodeName === 'LI') setDone(!done);
  }
  useEffect(() => {
    let list = document.querySelectorAll('li');
    props.onSetDoneItems(
      Array.from(list).some((element) => element.className === 'check')
    );
  }, [done, props]);
  return (
    <li onClick={setDoneItem} className={done || props.checkAll ? 'check' : ''}>
      {props.text}
      <button onClick={deleteItem}>delete</button>
    </li>
  );
}
