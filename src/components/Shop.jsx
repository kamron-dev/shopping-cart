import { useState, useEffect } from "react";
import GameCard from "./GameCard";
import { useSearchParams } from "react-router-dom"; 

const FilterBy = ({data, handleChange}) => {
    return (
        <div>
            <label htmlFor="category-filter">Filter by Category</label>
            <select name="category-filter" id="category-filter" onChange={handleChange}>
                {
                    [...new Set(data.map(item => item.category))].map(item => <option value={item} key={item}>{item }</option>)
                }
            </select>
        </div>
    )
}

const Shop = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [searchParameter] = useSearchParams();
    const query = searchParameter.get("q") || "";

    useEffect(() => {
        fetch("https://fakestoreapi.com/products", { mode: "cors" })
            .then((response) => response.json())
            .then((response) => {
                setData(response);
                setFilteredData(response);
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    const handleCategoryChange = (e) => {
        const filter = e.target.value;
        if (!filter) {
            setFilteredData(data)
        } else {
            const filteredData = data.filter(item => item.category === filter);
            setFilteredData(filteredData);

        };

    }


    const searchFilteredData = query
        ? filteredData.filter(item =>
            item.title.toLowerCase().includes(query)
        ) : filteredData;
    
    
    
    
    if (loading) return <h2>Loading...</h2>
    if (error) return <h2>A network error occured...</h2>
    
    
    return (
        <div id="shop-container">
            <FilterBy data={data} handleChange={handleCategoryChange}/>
            {
                <div id="shop-cards-container">
                    {searchFilteredData.map(item => <GameCard data={item} key={item.id} />)}
                    {searchFilteredData.length === 0 ? (
                        <h2>No items matching your filter</h2>
                    ) : (
                            searchFilteredData.map(item => (
                                <GameCard data={item} key={item.id} />
                            ))
                    )}
                
                
                </div>
            }
        </div>
    );
};

export default Shop;