import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setToCart } from '../store/cartStore';

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const json = await response.json();
      setProduct(json);
    })();
  }, [id, setProduct]);
  function addToCart(id) {
    dispatch(setToCart(id));
  }
  return (
    <>
      <Link to="/">back</Link>
      {product && (
        <div className="product">
          <h1>{product.title}</h1>
          <button onClick={()=>addToCart(product.id)}>add to cart</button>
        </div>
      )}
    </>
  );
}
