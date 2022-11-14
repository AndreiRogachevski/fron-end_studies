import { useState } from 'react';
import Item from './Item';

export default function InnerItem({ items }) {
  const [areas, setAreas] = useState([]);
  return (
    <>
      <ul>
        {items?.map((i) => (
          <Item key={i.id} data={i} addAreas={(data) => setAreas(data)} />
        ))}
      </ul>
      {areas?.areas && <InnerItem key={areas.id} items={areas.areas} />}
    </>
  );
}
