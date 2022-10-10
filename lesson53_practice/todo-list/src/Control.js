export default function Control({ setList }) {
  function handleCheck() {
    setList((currList) => {
      return currList.map((it) => {
        if (it.checked) {
          return { ...it, done: !it.done, checked: false };
        }
        return it;
      });
    });
  }
  function handleDelete() {
    setList((currList) => {
      return currList.filter((it) => !it.checked);
    });
  }
  return (
    <div>
      <button onClick={handleCheck}>Сделать выполненным</button>
      <button onClick={handleDelete}>удалить</button>
    </div>
  );
}
