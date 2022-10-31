import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './todosSlice';
export default function Form(props) {
  const [value, setValue] = useState('');
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setCheck(props?.item?.completed);
    setValue(props?.item?.text);
  }, [props.item]);
  function handleSubmit(e) {
    e.preventDefault();
    if (value !== '') {
      dispatch(addItem(value));
      setValue('');
    }
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        type="checkbox"
        checked={check}
        onChange={(e) => {
          setCheck(e.target.checked);
        }}
      />
      <input type="submit" value="add" />
    </form>
  );
}
