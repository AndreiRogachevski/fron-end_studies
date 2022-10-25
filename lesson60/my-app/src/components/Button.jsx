import { useDispatch, useSelector } from 'react-redux';
import { cartProducts, setToCart } from '../store/productsStore';

export default function Button({ id }) {
  const cart = useSelector(cartProducts);
  const dispatch = useDispatch();
  return (<button 
  disabled={cart.includes(id)}
  onClick={() => dispatch(setToCart(id))}>Add to Cart</button>)
}
