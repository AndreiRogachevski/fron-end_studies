import { useState, Fragment } from 'react';
import './List.css';
import ListItem from './ListItem';
import CheckButtons from './CheckButtons';
export default function List(props) {
  const [check, setCheck] = useState(false);
  const [checkAll, setCheckAll] = useState(false);
  function deleteItem(item, index) {
    props.onDeleteItem(item, index);
  }
  function checkItems(state) {
    setCheck(state);
  }
  function handelCheckAll(state) {
    setCheckAll(state);
  }
  return (
    <Fragment>
      <p> доработать CheckAll</p>
      <CheckButtons check={check} onCheckAll={handelCheckAll} />
      <ul>
        {props.items.map((item, index) => (
          <ListItem
            checkAll={checkAll}
            text={item}
            key={index}
            onDeleteItem={(it) => deleteItem(it, index)}
            onSetDoneItems={checkItems}
          />
        ))}
      </ul>
    </Fragment>
  );
}
