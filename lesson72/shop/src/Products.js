import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from './Pagination';
import { fetchAll, selectProducts } from './store/productsSlice';

export default function Products() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  // console.log(products);
  useEffect(() => {
    dispatch(fetchAll());
  }, []);
  return (
    <>
      <Pagination />
      <div className="products">
        {products.map((product, index) => (
          <div key={index}>
            <h2>{product.title}</h2>
            <img
              src={'http://localhost:3001/img/' + product.images[0]}
              alt="img"
            />
          </div>
        ))}
      </div>
    </>
  );
}
