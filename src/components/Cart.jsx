import { useOutletContext } from "react-router-dom";


const Cart = () => {
    const { cart } = useOutletContext();
    if (!cart.length) return <h2>Your cart is empty...</h2>

    const groupedCart = cart.reduce((acc, item) => {
        const existing = acc.find(newItem => newItem.id === item.id);
        existing ? existing.quantity += 1 : acc.push({ ...item, quantity: 1 });
        return acc;
    }, []);


    
    return (
        <table id="cart-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Quantity</th>
                
                </tr>
            </thead>
            <tbody>
                {groupedCart.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>
                                {item.title}
                            </td>
                            <td>
                                {item.category}
                            </td>
                            <td>
                                ${item.price}
                            </td>
                            <td>
                                {item.quantity}
                            </td>
                            
                        </tr>
                )
            })}
            </tbody>
            <tfoot>
                <tr>
                    <td>Total price:</td>
                    <td></td>
                    <td></td>
                    <td>${(cart.reduce((acc, item) => acc + item.price, 0)).toFixed(2)}</td>
                </tr>
            </tfoot>
        </table>
    )
     
};

export default Cart;