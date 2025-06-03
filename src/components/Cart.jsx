import { useOutletContext } from "react-router-dom";


const Cart = () => {
    const { cart } = useOutletContext();
    if (!cart.length) return <h2>Your cart is empty...</h2>
    
    
    return (
        <table id="cart-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>
                                {item.title}
                            </td>
                            <td>
                                ${item.price}
                            </td>
                            
                        </tr>
                )
            })}
            </tbody>
            <tfoot>
                <tr>
                    <td>Total price:</td>
                    <td></td>
                    <td>${(cart.reduce((acc, item) => acc + item.price, 0)).toFixed(2)}</td>
                </tr>
            </tfoot>
        </table>
    )
     
};

export default Cart;