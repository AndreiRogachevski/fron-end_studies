import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from '../store/productsStore';
import { cartItems,removeItem } from '../store/cartStore';

export default function Cart() {
  const cart = useSelector(cartItems);
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  function getProductTitle(id) {
    const product = products.find((product) => product.id === id);
    return product?.title;
  }
  function deleteCartItem(id) {
    dispatch(removeItem(id));
  }
  return (
    <ul>
      {cart.map((cartItem) => (
        <li key={cartItem.id}>
          {getProductTitle(cartItem.id)} : {cartItem.count}
          <button onClick={() => deleteCartItem(cartItem.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
}
