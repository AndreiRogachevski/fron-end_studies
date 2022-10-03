import { useState } from 'react';
export default function Form(props) {
  const [value, setValue] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    value !== '' && props.onAddItem(value);
    setValue('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}
