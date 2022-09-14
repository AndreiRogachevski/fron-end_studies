import { useState } from 'react';
export default function Form(props) {
  const [value, setValue] = useState('');
  function submit(e) {
    e.preventDefault();
    props.onAddItem(value);
    setValue('');
  }
  return (
    <form
      onSubmit={(e) => {
        submit(e);
      }}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <input type="submit" value="add" />
    </form>
  );
}
