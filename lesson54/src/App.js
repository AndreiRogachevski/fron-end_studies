import {Fragment, useEffect, useState} from "react";
import List from "./List";
import './style.css'
import Cart from "./Cart";

export default function App() {
    const [orders, setOrders] = useState([])
    const [products, setProducts] = useState([])
    useEffect(() => {
        (async () => {
            const response = await fetch('https://dummyjson.com/products');
            const json = await response.json();
            setProducts(json.products);
        })()
    }, [])

    function addToCart(productForAdd) {
        if (orders.some(order => order.product === productForAdd)) {
            setOrders(orders.map(order => {
                if (order.product === productForAdd) {
                    order.count++;
                }
                return order
            }))
        } else {
            setOrders([...orders, {
                product: productForAdd,
                count: 1,
            }])
        }
    }

    return (
        <Fragment>
            <div className='container'>
                <Cart orders={orders} setOrders={setOrders}/>
                <List products={products} addToCart={addToCart}/>
            </div>
        </Fragment>
    )
}
