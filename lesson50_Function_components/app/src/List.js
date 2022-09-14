// import { useState } from 'react';
import Li from './Li.js';
export default function List(props) {
  function del(item) {
    props.onRemove(item);
  }
  return (
    <ul>
      {props.list.map((item, index) => {
        return <Li onRemove={del} item={item} key={index} />;
      })}
    </ul>
  );
}
