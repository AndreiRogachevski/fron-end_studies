export default function Button(props) {
  let buttons = [];
  for (let i = 1; i <= props.totalPages; i++) {
    buttons.push(i);
  }
  return (
    <div className="pagination">
      <button onClick={() => props.switchPage(-1)}>previous</button>
      {buttons.map((button, ndx) => (
        <button key={ndx} onClick={() => props.setNewPage(button)}>
          {button}
        </button>
      ))}
      <button onClick={() => props.switchPage(1)}>next</button>
    </div>
  );
}
