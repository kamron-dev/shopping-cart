import { useOutletContext } from "react-router-dom";

const ShopItem = (data) => {
    return (
        <div>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
        </div>
    );
}

const Shop = () => {
    const data = useOutletContext();
    
//     if (!Array.isArray(data)) {
//     return <p>Loading shop...</p>; // or skeleton, spinner, etc.
//   }
    
    return (
        <div>
            <h1>Hello, Shop!</h1>
            {
                data ? 
                <div>
                    {data.map(item => <ShopItem data={item} key={item.id} />)}
               
                
                
                </div> : <h1>Loading...</h1>
            }
        </div>
    );
};

export default Shop;