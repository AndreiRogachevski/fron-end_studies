import { Fragment } from 'react';
import Pagination from './Pagination.js';

export default function Buttons(props) {
  function change(num) {
    props.onChange(num);
  }
  function changePage(page) {
    props.onChangePage(page);
  }
  return (
    <Fragment>
      <button
        disabled={props.skip <= props.perPage - 1}
        onClick={() => change(-props.perPage)}
      >
        previos
      </button>
      <Pagination
        onChangePage={changePage}
        total={props.total}
        perPage={props.perPage}
      />
      <button
        disabled={props.skip + props.perPage >= props.total}
        onClick={() => change(props.perPage)}
      >
        next
      </button>
    </Fragment>
  );
}
