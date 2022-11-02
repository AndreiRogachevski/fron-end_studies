import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function View() {
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3000/todos');
      const data = await response.json();
      const currentItem = data.find((i) => +i.id === +id);
      setItem(currentItem);
    })();
  }, [id]);
  return (
    <>
    <Link to='/'>back</Link>
    <dl>
      {Object.keys(item).map((i,idx) => (
        <div key={idx}>
          <dt>{i}</dt>
          <dd>{item[i].toString()}</dd>
        </div>
      ))}
    </dl>
      </>
  );
}
