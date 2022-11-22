export default function Button(props) {
  let buttons = [];
  for (let i = 1; i <= props.totalPages; i++) {
    buttons.push(i);
  }
  function changePage(btnValue) {
    props.setNewPage(btnValue);
  }
  return (
    <div>
      <button onClick={() => props.switchPage(-1)}>previous</button>
      {buttons.map((button, ndx) => (
        <button key={ndx} onClick={() => changePage(button)}>
          {button}
        </button>
      ))}
      <button onClick={() => props.switchPage(1)}>next</button>
    </div>
  );
}
