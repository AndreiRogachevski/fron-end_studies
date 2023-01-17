import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Pagination from './Pagination';
import Cart from './Cart';
import { fetchAll, selectProducts } from '../../store/productsSlice';
import '../../styles/products/card.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../styles/products/rating.css';

export default function Products() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const { page } = useParams();
  useEffect(() => {
    dispatch(fetchAll(page));
  }, [dispatch, page]);
  return (
    <>
      <Pagination/>
      <main className="products-container">
        {products.map((product) => (
          <Cart key={product.id} product={product} />
        ))}
      </main>
      <Pagination />
    </>
  );
}
