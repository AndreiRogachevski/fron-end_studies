import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from './Button';
export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    (async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const json = await response.json();
      setProduct(json);
    })();
  }, []);
  return (
    <>
      <Link to="/">back</Link>
      {product && (
        <div className='product'>
          <Button id={product.id} />
          <h1>{product.title}</h1>
          {product.images.map((img,index)=>(
            <img key={index} src={img} alt={product.title}/>
          ))}
          {/* <img src={product.images[1]} alt={product.title}/> */}
        </div>
      )}
    </>
  );
}
