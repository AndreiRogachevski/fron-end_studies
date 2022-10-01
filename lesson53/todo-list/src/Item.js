export default function Item(props) {
  function makeDone(e) {
    if (e.target.nodeName === 'LI') {
      props.setList((currList) => {
        return currList.map((it, ind) => {
          if (ind === props.index) {
            return { ...it, done: !it.done };
          }
          return it;
        });
      });
    }
  }
  return (
    <li className={props.item.done ? 'check' : ''} onClick={makeDone}>
      <input
        type="checkbox"
        checked={props.item.checked}
        onChange={(e) => props.setChecked(e.target.checked)}
      />
      {props.item.text}
      <button onClick={() => props.onDeleteItem()}>delete</button>
    </li>
  );
}
