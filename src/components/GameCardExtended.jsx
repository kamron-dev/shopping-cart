import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const GameCardExtended = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();

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
            <button>Buy</button>
        </div>
    )
};

export default GameCardExtended;