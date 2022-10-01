import Item from './Item.js';

export default function List(props) {
  return (
    <ul>
      {props.items.map((item, index) => (
        <Item
          key={index}
          index={index}
          item={item}
          onDeleteItem={() => props.onDeleteItem(item.text, index)}
          setChecked={(check) => props.setChecked(check, index)}
          setList={props.setList}
        />
      ))}
    </ul>
  );
}
