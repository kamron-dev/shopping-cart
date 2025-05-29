import { useState, useEffect } from "react";
import GameCard from "./GameCard";


const Shop = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products", { mode: "cors" })
            .then((response) => response.json())
            .then((response) => setData(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
  }, []);
    
    if (loading) return <h2>Loading...</h2>
    if (error) return <h2>A network error occured...</h2>
    
    return (
        <div id="shop-container">
            {/* <h1>Hello, Shop!</h1> */}
            {
                <div id="shop-cards-container">
                    {data.map(item => <GameCard data={item} key={item.id} />)}
               
                
                
                </div>
            }
        </div>
    );
};

export default Shop;