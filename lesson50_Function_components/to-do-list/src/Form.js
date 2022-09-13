import { useState } from 'react';
export default function Form(props) {
  const [value, setValue] = useState('');
  function handleChange(e) {
    setValue(e.target.value);
  }
  function handlePush(e) {
    e.preventDefault();
    props.onPush(value);
    setValue('');
  }
  return (
    <form onSubmit={(e) => handlePush(e)}>
      <input type="text" value={value} onChange={(e) => handleChange(e)} />
      <input type="submit" value="add" />
    </form>
  );
}
