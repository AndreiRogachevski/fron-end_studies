import { useState, useEffect } from 'react';

import Item from './Item.js';

export default function List(props) {
  const [showBtn, setShowBtn] = useState(false);
  let items = Array.from(document.querySelectorAll('input[type=checkbox]'));
  useEffect(() => {
    setShowBtn(items.some((item) => item.checked));
  }, []);

  return (
    <ul>
      {props.items.map((item, index) => (
        <Item
          key={index}
          text={item}
          onDeleteItem={() => props.onDeleteItem(item, index)}
        />
      ))}
    </ul>
  );
}
