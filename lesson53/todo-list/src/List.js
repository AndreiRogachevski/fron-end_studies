import { useState, Fragment } from 'react';
import './List.css';
import ListItem from './ListItem';
import CheckButtons from './CheckButtons';
export default function List(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [checkAll, setCheckAll] = useState(false);
  function deleteItem(item, index) {
    props.onDeleteItem(item, index);
  }
  function checkItems(state) {
    setIsChecked(state);
  }
  function deleteAll() {
    props.onDeleteAll();
  }
  return (
    <Fragment>
      <CheckButtons
        check={isChecked}
        onCheckAll={(e) => setCheckAll(e)}
        onDeleteAll={deleteAll}
      />
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
