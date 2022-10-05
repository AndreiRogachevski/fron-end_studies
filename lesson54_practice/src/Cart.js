export default function Cart(props) {
    function changeCount(id, value) {
        const order = props.orders.find(o => o.product.id === id);
        order.count = order.count + value;
        if(order.count > 0){
            props.setOrders(props.orders.map(o=>{
                if(o.product.id === id){
                    return order
                }
                return o
            }))
        } else {
            props.setOrders(props.orders.filter(o=> o.product.id !== id));
        }
    }

    return (<table className='cart'>
        <thead>
        <tr>
            <th>Product</th>
            <th>Image</th>
            <th>Price</th>
            <th>Count</th>
            <th>SubTotal</th>
        </tr>
        </thead>
        <tbody>
        {props.orders.map((order, index) =>
            <tr
                key={index}
            >
                <td>{order.product.title}</td>
                <td><img src={order.product.thumbnail}/></td>
                <td>
                    {order.product.price}
                </td>
                <td>
                    <button onClick={() => changeCount(order.product.id, -1)}>-</button>
                    {order.count}
                    <button onClick={() => changeCount(order.product.id, 1)}>+</button>
                </td>
                <td>{order.product.price * order.count}</td>
            </tr>)}
        </tbody>
        <tfoot>
                <tr>
                    <td colSpan={4}>
                        Total:{props.orders.reduce( (a,b) => a+(b.count*b.product.price),0)}
                    </td>
                </tr>
        </tfoot>
    </table>)
}