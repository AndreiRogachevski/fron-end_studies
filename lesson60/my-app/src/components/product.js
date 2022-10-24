import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    (async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const json = await response.json();
      setProduct(json);
    })();
  }, [id, product]);
  return (
    <>
      <Link to="/">back</Link>
      {product && (
        <h1>
          {product.title} <button>to cart</button>
        </h1>
      )}
    </>
  );
}
