import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartProducts, selectProducts } from '../store/productsStore';

export default function Cart() {
  const cart = useSelector(cartProducts);
  const products = useSelector(selectProducts);
  return (
    <>
      <Link to="/">back</Link>
      {products
        .filter((product) => cart.includes(product.id))
        .map((product) => {
          return (
            <div key={product.id} className='cart'>
              <img src={product.images[0]} alt="img" />
              <Link to={'/product/' + product.id}>{product.title}</Link>
            </div>
          );
        })}
    </>
  );
}
