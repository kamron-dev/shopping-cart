import { useOutletContext } from "react-router-dom";


const Cart = () => {
    const { cart } = useOutletContext();
    if (!cart.length) return <h2>Your cart is empty...</h2>
    
    
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((item) => {
                    return (
                        <tr>
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
        </table>
    )
     
};

export default Cart;