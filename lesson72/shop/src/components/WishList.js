import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { productsApi } from '../api/products';
import Cart from './product/Cart';

export default function ViewWish() {
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    productsApi
      .getWish({
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => setWishlist(res.data.data))
      .catch((err) => console.log(err));
  }, [wishlist]);
  return (
    <>
      <Link to="/">Back</Link>
      <div className="d-flex gap-3 flex-wrap">
        {wishlist.map((product) => (
          <Cart key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
