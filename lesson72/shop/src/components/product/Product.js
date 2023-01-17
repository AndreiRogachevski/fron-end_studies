import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Product() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const response = await fetch('http://194.87.94.216/api/products/' + id);
      const data = await response.json();
      setProduct(data.data);
    })();
  }, [id]);
  return (
    <>
      <Link to="/">back</Link>
      {!!product.images &&
        product.images.map((img, i) => <img src={img} alt="img" key={i} />)}
    </>
  );
}
