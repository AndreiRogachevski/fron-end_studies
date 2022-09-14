import { Fragment } from 'react';
export default function Buttons(props) {
  function change(num) {
    props.onChange(num);
  }
  return (
    <Fragment>
      <button onClick={() => change(-30)}>previos</button>
      <button onClick={() => change(30)}>next</button>
    </Fragment>
  );
}
