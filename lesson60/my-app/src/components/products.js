import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  fetchProducts,
  selectProducts,
  productStatus,
} from '../store/productsStore';
import { setToCart } from '../store/cartStore';
import Spinner from './spinner/spinner';

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const status = useSelector(productStatus);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  function addToCart(id) {
    dispatch(setToCart(id));
  }
  return (
    <>
      {status === 'loading' ? (
        <Spinner />
      ) : (
        products.map((product) => (
          <article key={product.id} className="products">
            <Link to={`product/${product.id}`}>{product.title}</Link>
            <button onClick={()=>addToCart(product.id)}>add to cart</button>
          </article>
        ))
      )}
    </>
  );
}
