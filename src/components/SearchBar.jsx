import { useNavigate } from "react-router-dom";
import { useState } from "react";


const SearchBar = () => {
    const [searchParams, setSearchParams] = useState();
    let navigate = useNavigate();

    return (
        <>
            <input type="search" name="search-bar" id="search-bar" value={searchParams} onChange={(e) => setSearchParams(e.target.value)} placeholder='Enter name...' />
            <button onClick={() => {
                if (!searchParams.trim()) return;
                navigate(`/shop?q=${encodeURIComponent(searchParams)}`);
            }}>Search</button>
        </>
    );
};

export default SearchBar;