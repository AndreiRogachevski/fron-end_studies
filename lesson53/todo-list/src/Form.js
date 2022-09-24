import { useState } from 'react';
export default function Form(props) {
  const [value, setValue] = useState('');
  function addListItem(e) {
    e.preventDefault();
    if (value === '') {
      return;
    }
    props.onAddItem(value);
    setValue('');
  }
  return (
    <form onSubmit={addListItem}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}
