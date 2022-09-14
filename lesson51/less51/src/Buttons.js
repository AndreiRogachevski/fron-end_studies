import { Fragment } from 'react';
export default function Buttons(props) {
  function change(num) {
    props.onChange(num);
  }
  return (
    <Fragment>
      <button onClick={() => change(-props.skip)}>previos</button>
      <button onClick={() => change(props.skip)}>next</button>
    </Fragment>
  );
}
