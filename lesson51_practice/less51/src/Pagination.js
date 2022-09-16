import { Fragment } from 'react';
export default function Pagination(props) {
  const pagesCount = Math.ceil(props.total / props.perPage);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  function changePage(page) {
    props.onChangePage(page);
  }
  return (
    <Fragment>
      {pages.map((page) => (
        <button key={page} onClick={() => changePage(page)}>
          {page}
        </button>
      ))}
    </Fragment>
  );
}
