// import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";

const ShopItem = ({data}) => {
    return (
        <div>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
        </div>
    );
}

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
    
//     if (!Array.isArray(data)) {
//     return <p>Loading shop...</p>; // or skeleton, spinner, etc.
    //   }
    if (loading) return <h2>Loading...</h2>
    if (error) return <h2>A network error occured...</h2>
    
    return (
        <div>
            <h1>Hello, Shop!</h1>
            {
                <div>
                    {data.map(item => <ShopItem data={item} key={item.id} />)}
               
                
                
                </div>
            }
        </div>
    );
};

export default Shop;