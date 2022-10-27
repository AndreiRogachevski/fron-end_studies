import { useDispatch } from "react-redux";
import { deleteItem } from "./todosSlice";

export default function ListItem({item}) {
  const dispatch = useDispatch();
  return(
    <li>
      <button>edit</button>
      {item.todo}
      <button onClick={()=>dispatch(deleteItem(item.id))}>delete</button>
      </li>
  )
}