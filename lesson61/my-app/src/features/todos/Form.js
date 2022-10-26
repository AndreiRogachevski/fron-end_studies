import React, { useState } from 'react';

export default function Form() {
  const [value, setValue] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    
  }
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input type="submit" value="add" />
    </form>
  );
}
