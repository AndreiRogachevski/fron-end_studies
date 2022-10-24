import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  fetchProducts,
  selectProducts,
  productStatus,
} from '../store/productsStore';
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
      {status === 'loading' ? (
        <Spinner />
      ) : (
        products.map((product) => (
          <article key={product.id}>
            <Link relative="products" to={`product/${product.id}`}>
              {product.title}
              <button>to cart</button>
            </Link>
          </article>
        ))
      )}
    </>
  );
}
