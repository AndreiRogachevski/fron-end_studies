import { useState } from 'react';
export default function CheckButtons(props) {
  const [checkAll, setCheckAll] = useState(false);
  function handelCheckAll() {
    setCheckAll(!checkAll);
    props.onCheckAll(checkAll);
  }
  return (
    <div
      style={props.check ? { visibility: 'visible' } : { visibility: 'hidden' }}
    >
      <button onClick={handelCheckAll}>check all</button>
      <button onClick={props.onDeleteAll}>delete all</button>
    </div>
  );
}
