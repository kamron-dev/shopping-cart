// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Link, Outlet } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
// import { useEffect } from "react";

function App() {
  // const [searchWord, setSearchWord] = useState("");
  
  return (
    <>
      <header>
        <Link to="/">
          <h2>StockY</h2>
        </Link>
        <input type="search" name="search-bar" id="search-bar" placeholder='Enter name...' />
        <button>Search</button>
        <button>
          <Link to="shop">Shop</Link>
        </button>
        <button>Cart</button>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
};

export default App
