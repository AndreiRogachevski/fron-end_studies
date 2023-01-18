import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { productsApi } from '../../api/products';
// import Slider from './Slider';

export default function View() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const response = await productsApi.getProduct(id);
      setProduct(response.data.data);
    })();
  }, [id]);
  return (
    <>
      <Link to="/">back</Link>
      {/* {!!product.images && <Slider images={product.images} />} */}
      {!!product.images &&
        product.images.map((img, i) => <img src={img} alt="img" key={i} />)}
    </>
  );
}
