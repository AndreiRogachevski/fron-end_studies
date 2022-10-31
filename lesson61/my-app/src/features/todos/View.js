import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Form from './Form';

export default function View() {
  const { id } = useParams();
  const [item, setItem] = useState();
  useEffect(() => {
    (async () => {
      const response = await fetch(`http://192.168.0.139:3000/todos/${id}`);
      const json = response.json();
      setItem(json);
    })();
  }, [id]);
  return <Form item={item} />;
}
