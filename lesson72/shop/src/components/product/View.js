import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { productsApi } from '../../api/products';
import Slider from './Slider';
import '../../styles/product/view.css';

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
    <div className="view">
      <Link to="/">back</Link>
      {!!product.images && <Slider images={product.images} />}
      <table className="product-info">
        <tbody>
          {Object.keys(product).map(
            (key, i) =>
              // product[key].length &&
              product[key] !== product.images && (
                <tr key={i}>
                  <th>{key}</th>
                  <td>{product[key].toString()}</td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
}
