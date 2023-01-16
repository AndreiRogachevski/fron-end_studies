import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Pagination from './Pagination';
import { fetchAll, selectProducts } from './store/productsSlice';
import likeIcon from './assets/heart-svgrepo-com (1).svg';
import basketIcon from './assets/basket-svgrepo-com.svg';
import Rating from '@mui/material/Rating';

export default function Products() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const { page, perPage } = useParams();
  console.log(perPage);
  useEffect(() => {
    dispatch(fetchAll(page, perPage));
  }, [dispatch, page, perPage]);
  return (
    <>
      <Pagination />
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <div className="image">
              <img src={product.image} alt="img" />
            </div>
            <div className="product-describe">
              <h3>
                {product.title} {product.screen_size}inch {product.ram}/
                {product.hsard}GB
              </h3>
              <Rating
                name="half-rating-read"
                defaultValue={product.rating}
                precision={0.1}
                readOnly
              />
              <div className="product-footer">
                <p>{product.price}$</p>
                <div>
                  <img src={basketIcon} alt="like" />
                  <img src={likeIcon} alt="like" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
