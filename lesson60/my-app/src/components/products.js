import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  fetchProducts,
  selectProducts,
  productStatus,
} from '../store/productsStore';
import Button from './Button';
import Spinner from './spinner/spinner';
export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const status = useSelector(productStatus);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      <Link to="/cart">Cart</Link>
      {status === 'loading' ? (
        <Spinner />
      ) : (
        products.map((product) => (
          <article key={product.id} className='products'>
            <Button id={product.id} />
            <Link relative="products" to={`product/${product.id}`}>
              {product.title}
            </Link>
          </article>
        ))
      )}
    </>
  );
}
