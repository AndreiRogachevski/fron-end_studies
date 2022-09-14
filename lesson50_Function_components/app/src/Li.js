import { useState } from 'react';
export default function Li(props) {
  const [check, setCheck] = useState(true);
  function del(item) {
    props.onRemove(item);
  }
  return (
    <li className={check ? 'decor' : ''}>
      <button onClick={() => del(props.item)}>delete</button>
      {props.item}
      <input
        type="checkbox"
        checked={check}
        onChange={(e) => setCheck(e.currentTarget.checked)}
      />
    </li>
  );
}
