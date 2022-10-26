export default function ListItem({item}) {
  function deleteItem(){
    
  }
  return(
    <li>
      <button>edit</button>
      {item.todo}
      <button onClick={deleteItem}>delete</button>
      </li>
  )
}