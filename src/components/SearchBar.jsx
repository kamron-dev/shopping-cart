import { useState } from "react";


const SearchBar = () => {
    const [searchWord, setSearchWord] = useState("");
    const handleChangeSearchWord = (event) => {
        setSearchWord(event.target.value);
        
    }

    return (
        <>
            <input type="search" name="search-bar" id="search-bar" value={searchWord} onChange={handleChangeSearchWord} placeholder='Enter name...' />
            <button>Search</button>
        </>
    )
};

export default SearchBar;