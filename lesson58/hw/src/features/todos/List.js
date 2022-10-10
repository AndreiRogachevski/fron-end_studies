import { useSelector } from 'react-redux';
import Item from './Item';
import { selectTodos } from './todosSlice';

export default function List() {
  const list = useSelector(selectTodos);
  return (
    <ul>
      {list.map((item, index) => (
        <Item key={index} text={item} index={index} />
      ))}
    </ul>
  );
}
