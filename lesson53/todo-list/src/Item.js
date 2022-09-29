import { useState } from 'react';
export default function Item(props) {
  const [done, setDone] = useState(false);
  const [checked, setChecked] = useState(false);
  function makeDone(e) {
    e.target.nodeName === 'LI' && setDone(!done);
  }
  return (
    <li className={done ? 'check' : ''} onClick={makeDone}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      {props.text}
      <button onClick={() => props.onDeleteItem()}>delete</button>
    </li>
  );
}
