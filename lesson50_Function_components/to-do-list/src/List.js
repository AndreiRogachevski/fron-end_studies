import Li from './Li.js';
export default function List(props) {
  function handleDelete(item, index) {
    props.onDeleteItem(item, index);
  }
  return (
    <ul>
      {props.list.map((item, index) => {
        return (
          <Li
            item={item}
            key={index}
            onDeleteItem={() => handleDelete(item, index)}
          />
        );
      })}
    </ul>
  );
}
