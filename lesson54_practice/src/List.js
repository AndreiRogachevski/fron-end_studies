export default function List(props) {
    return (
        <ul className='products'>
            {props.products.map(product =>
                <li
                    onClick={() =>props.addToCart(product)}
                    className='product'
                    key={product.id}
                >
                    <h3>{product.title}</h3>
                    <img src={product.thumbnail} alt={product.title}/>
                    <p className='price'>{product.price} <span>- {product.discountPercentage}%</span></p>
                    <p className='description'>{product.description}</p>
                </li>)}
        </ul>
    )
}