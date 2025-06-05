import { useParams, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";

const GameCardExtended = () => {
    const [item, setItem] = useState(null);
    const [quantity, setQuantity] = useState(0);
    const { id } = useParams();
    const { handleAddToCart } = useOutletContext();

    const handleChangeQuantity = (e) => {
        setQuantity(Number(e.target.value));
    };
   
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setItem(data));
    }, [id]);
    
    if (!item) return <h2>Loading...</h2>
    return (
        <div id="item-extended">
            <img src={item.image}></img>
            <h2>{item.title}</h2>
            <h3>{item.description}</h3>
            <h3>Price: ${ item.price }</h3>
            <label htmlFor="qty-input">Quantity: </label>
            <input type="number" value={quantity} onChange={handleChangeQuantity}  name="qty-input" id="qty-input" min="0" />
            <button onClick={() => {
                if (quantity > 0) {
                    for (let i = 0; i < quantity; i++) {
                        handleAddToCart(item);
                    };
                } else {
                    handleAddToCart(item);
                }
            }}>Buy</button>
        </div>
    );
};

export default GameCardExtended;