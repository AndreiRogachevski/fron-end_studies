import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll, selectProducts } from './store/productsSlice';

export default function Products() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAll());
  }, []);
  return (
    <div className="products">
      {products.map((product, index) => (
        <div key={index}>
          <h2>{product.title}</h2>
          <img
            src={'http://192.168.0.139:3001/img/' + product.images[0]}
            alt="img"
          />
        </div>
      ))}
    </div>
  );
}
